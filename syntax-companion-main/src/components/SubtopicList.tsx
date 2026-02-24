import type { Subtopic } from "@/data/topics";

interface SubtopicListProps {
  subtopics: Subtopic[];
  selectedSubtopic: string | null;
  onSelectSubtopic: (id: string) => void;
}

export default function SubtopicList({ subtopics, selectedSubtopic, onSelectSubtopic }: SubtopicListProps) {
  return (
    <div className="flex flex-wrap gap-2 animate-fade-in">
      {subtopics.map((sub) => {
        const isActive = selectedSubtopic === sub.id;
        return (
          <button
            key={sub.id}
            onClick={() => onSelectSubtopic(sub.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border
              ${isActive
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-secondary border-border text-secondary-foreground hover:border-primary/50 hover:text-foreground"
              }`}
          >
            {sub.title}
          </button>
        );
      })}
    </div>
  );
}
