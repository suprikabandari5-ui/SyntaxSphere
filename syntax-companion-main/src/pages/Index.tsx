import { useState, useMemo } from "react";
import { ArrowLeft, Code2, Braces } from "lucide-react";
import { topics, type Language } from "@/data/topics";
import TopicList from "@/components/TopicList";
import SubtopicList from "@/components/SubtopicList";
import CodeDisplay from "@/components/CodeDisplay";
import LanguageFilter from "@/components/LanguageFilter";
import AIAssistant from "@/components/AIAssistant";

const Index = () => {
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);
  const [selectedSubtopicId, setSelectedSubtopicId] = useState<string | null>(null);
  const [selectedLanguages, setSelectedLanguages] = useState<Language[]>(["java", "python", "c", "cpp"]);

  const selectedTopic = useMemo(
    () => topics.find((t) => t.id === selectedTopicId) || null,
    [selectedTopicId]
  );

  const selectedSubtopic = useMemo(
    () => selectedTopic?.subtopics.find((s) => s.id === selectedSubtopicId) || null,
    [selectedTopic, selectedSubtopicId]
  );

  const handleSelectTopic = (id: string) => {
    setSelectedTopicId(id);
    setSelectedSubtopicId(null);
  };

  const handleBack = () => {
    if (selectedSubtopicId) {
      setSelectedSubtopicId(null);
    } else {
      setSelectedTopicId(null);
    }
  };

  const handleNavigateFromAI = (topicId: string, subtopicId: string) => {
    setSelectedTopicId(topicId);
    setSelectedSubtopicId(subtopicId);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <Braces className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground tracking-tight">SyntaxSphere</h1>
              <p className="text-xs text-muted-foreground">Java · Python · C · C++</p>
            </div>
          </div>
          <LanguageFilter selected={selectedLanguages} onChange={setSelectedLanguages} />
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-6">
          {/* Left Panel - Topics/Content */}
          <div className="flex-1 min-w-0">
            {/* Breadcrumb / Back */}
            {selectedTopicId && (
              <button
                onClick={handleBack}
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                {selectedSubtopicId ? selectedTopic?.title : "All Topics"}
              </button>
            )}

            {/* No topic selected: show topic grid */}
            {!selectedTopicId && (
              <div className="animate-fade-in">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Compare syntax across languages
                  </h2>
                  <p className="text-muted-foreground">
                    Select a topic to explore side-by-side code examples in Java, Python, C, and C++.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {topics.map((topic) => {
                    const Icon = topic.icon;
                    return (
                      <button
                        key={topic.id}
                        onClick={() => handleSelectTopic(topic.id)}
                        className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-accent transition-all duration-200 text-left group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-foreground">{topic.title}</h3>
                          <p className="text-xs text-muted-foreground">
                            {topic.subtopics.length} subtopic{topic.subtopics.length > 1 ? "s" : ""}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Topic selected but no subtopic: show subtopic list */}
            {selectedTopic && !selectedSubtopicId && (
              <div className="animate-fade-in">
                <h2 className="text-xl font-bold text-foreground mb-1">{selectedTopic.title}</h2>
                <p className="text-sm text-muted-foreground mb-5">Choose a subtopic to see syntax examples.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedTopic.subtopics.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => setSelectedSubtopicId(sub.id)}
                      className="p-4 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-accent transition-all duration-200 text-left"
                    >
                      <h3 className="text-sm font-semibold text-foreground mb-1">{sub.title}</h3>
                      <p className="text-xs text-muted-foreground line-clamp-2">{sub.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Subtopic selected: show description + code */}
            {selectedSubtopic && (
              <div className="animate-fade-in space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-2">{selectedSubtopic.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{selectedSubtopic.description}</p>
                </div>
                <CodeDisplay examples={selectedSubtopic.examples} selectedLanguages={selectedLanguages} />
              </div>
            )}
          </div>

          {/* Right Panel - AI Assistant */}
          <div className="hidden lg:block w-80 shrink-0">
            <div className="sticky top-24">
              <AIAssistant onNavigate={handleNavigateFromAI} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
