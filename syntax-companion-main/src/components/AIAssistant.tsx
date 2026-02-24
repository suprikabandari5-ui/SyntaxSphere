import { useState, useRef, useEffect } from "react";
import { Bot, Send, Sparkles, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { toast } from "@/hooks/use-toast";

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`;

const HINTS = [
  "How to declare a variable in C?",
  "Python for loop syntax",
  "C++ string length",
  "Java try-catch example",
  "Difference between arrays in C and Python",
  "What is a stack data structure?",
];

type Msg = { role: "user" | "assistant"; content: string };

interface AIAssistantProps {
  onNavigate: (topicId: string, subtopicId: string) => void;
}

async function streamChat({
  messages,
  onDelta,
  onDone,
  onError,
}: {
  messages: Msg[];
  onDelta: (text: string) => void;
  onDone: () => void;
  onError: (err: string) => void;
}) {
  const resp = await fetch(CHAT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
    },
    body: JSON.stringify({ messages }),
  });

  if (!resp.ok) {
    const data = await resp.json().catch(() => ({}));
    onError(data.error || `Error ${resp.status}`);
    return;
  }

  if (!resp.body) {
    onError("No response body");
    return;
  }

  const reader = resp.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let streamDone = false;

  while (!streamDone) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });

    let newlineIndex: number;
    while ((newlineIndex = buffer.indexOf("\n")) !== -1) {
      let line = buffer.slice(0, newlineIndex);
      buffer = buffer.slice(newlineIndex + 1);
      if (line.endsWith("\r")) line = line.slice(0, -1);
      if (line.startsWith(":") || line.trim() === "") continue;
      if (!line.startsWith("data: ")) continue;

      const jsonStr = line.slice(6).trim();
      if (jsonStr === "[DONE]") { streamDone = true; break; }

      try {
        const parsed = JSON.parse(jsonStr);
        const content = parsed.choices?.[0]?.delta?.content as string | undefined;
        if (content) onDelta(content);
      } catch {
        buffer = line + "\n" + buffer;
        break;
      }
    }
  }

  // flush remaining
  if (buffer.trim()) {
    for (let raw of buffer.split("\n")) {
      if (!raw) continue;
      if (raw.endsWith("\r")) raw = raw.slice(0, -1);
      if (!raw.startsWith("data: ")) continue;
      const jsonStr = raw.slice(6).trim();
      if (jsonStr === "[DONE]") continue;
      try {
        const parsed = JSON.parse(jsonStr);
        const content = parsed.choices?.[0]?.delta?.content as string | undefined;
        if (content) onDelta(content);
      } catch { /* ignore */ }
    }
  }

  onDone();
}

export default function AIAssistant({ onNavigate }: AIAssistantProps) {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<Msg[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = async (text: string) => {
    if (!text.trim() || isLoading) return;
    const userMsg: Msg = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setQuery("");
    setIsLoading(true);

    let assistantSoFar = "";
    const upsertAssistant = (chunk: string) => {
      assistantSoFar += chunk;
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant") {
          return prev.map((m, i) => (i === prev.length - 1 ? { ...m, content: assistantSoFar } : m));
        }
        return [...prev, { role: "assistant", content: assistantSoFar }];
      });
    };

    try {
      await streamChat({
        messages: [...messages, userMsg],
        onDelta: upsertAssistant,
        onDone: () => setIsLoading(false),
        onError: (err) => {
          toast({ title: "AI Error", description: err, variant: "destructive" });
          setIsLoading(false);
        },
      });
    } catch (e) {
      console.error(e);
      toast({ title: "Connection error", description: "Could not reach AI service.", variant: "destructive" });
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full rounded-xl border border-border bg-card overflow-hidden ai-glow">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
          <Bot className="w-4 h-4 text-primary" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground">AI Assistant</h3>
          <p className="text-xs text-muted-foreground">Ask about any syntax</p>
        </div>
        <Sparkles className="w-4 h-4 text-primary ml-auto animate-pulse-glow" />
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 min-h-[200px] max-h-[400px]">
        {messages.length === 0 && (
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">Try asking:</p>
            {HINTS.map((hint) => (
              <button
                key={hint}
                onClick={() => send(hint)}
                className="block w-full text-left text-xs px-3 py-2 rounded-md bg-secondary hover:bg-accent text-secondary-foreground transition-colors"
              >
                "{hint}"
              </button>
            ))}
          </div>
        )}
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`text-sm px-3 py-2 rounded-lg max-w-[90%] ${
              msg.role === "user"
                ? "bg-primary text-primary-foreground ml-auto"
                : "bg-secondary text-secondary-foreground"
            }`}
          >
            {msg.role === "assistant" ? (
              <div className="prose prose-sm prose-invert max-w-none">
                <ReactMarkdown>{msg.content}</ReactMarkdown>
              </div>
            ) : (
              msg.content
            )}
          </div>
        ))}
        {isLoading && messages[messages.length - 1]?.role === "user" && (
          <div className="flex items-center gap-2 text-xs text-muted-foreground px-3 py-2">
            <Loader2 className="w-3 h-3 animate-spin" /> Thinking...
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-3 border-t border-border">
        <form
          onSubmit={(e) => { e.preventDefault(); send(query); }}
          className="flex gap-2"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask about syntax..."
            disabled={isLoading}
            className="flex-1 bg-secondary border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-primary text-primary-foreground rounded-lg p-2 hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
