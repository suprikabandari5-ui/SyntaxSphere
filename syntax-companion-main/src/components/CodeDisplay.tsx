import { useState, useCallback } from "react";
import { Check, Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import type { CodeExample, Language } from "@/data/topics";

const LANGUAGE_MAP: Record<Language, string> = {
  java: "java",
  python: "python",
  c: "c",
  cpp: "cpp",
};

const LANG_COLORS: Record<Language, string> = {
  java: "var(--lang-java)",
  python: "var(--lang-python)",
  c: "var(--lang-c)",
  cpp: "var(--lang-cpp)",
};

interface CodeBlockProps {
  example: CodeExample;
}

function CodeBlock({ example }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(example.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [example.code]);

  return (
    <div className="flex flex-col rounded-lg overflow-hidden border border-border animate-fade-in">
      <div
        className="flex items-center justify-between px-4 py-2"
        style={{
          backgroundColor: `hsl(${LANG_COLORS[example.language]})`,
          color: example.language === "c" ? "hsl(var(--foreground))" : "hsl(var(--background))",
        }}
      >
        <span className="text-sm font-semibold font-mono">{example.label}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-xs opacity-80 hover:opacity-100 transition-opacity"
          aria-label="Copy code"
        >
          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <SyntaxHighlighter
        language={LANGUAGE_MAP[example.language]}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          borderRadius: 0,
          background: "hsl(225, 18%, 8%)",
          fontSize: "0.82rem",
          lineHeight: "1.5",
        }}
        showLineNumbers
        wrapLines
      >
        {example.code}
      </SyntaxHighlighter>
    </div>
  );
}

interface CodeDisplayProps {
  examples: CodeExample[];
  selectedLanguages: Language[];
}

export default function CodeDisplay({ examples, selectedLanguages }: CodeDisplayProps) {
  const filtered = examples.filter((e) => selectedLanguages.includes(e.language));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {filtered.map((example) => (
        <CodeBlock key={example.language} example={example} />
      ))}
    </div>
  );
}
