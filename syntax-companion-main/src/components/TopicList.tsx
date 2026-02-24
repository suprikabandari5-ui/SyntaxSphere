import { topics, type Topic } from "@/data/topics";

interface TopicListProps {
  selectedTopic: string | null;
  onSelectTopic: (id: string) => void;
}

export default function TopicList({ selectedTopic, onSelectTopic }: TopicListProps) {
  return (
    <nav className="flex flex-col gap-1">
      <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 px-3">
        Topics
      </h2>
      {topics.map((topic) => {
        const Icon = topic.icon;
        const isActive = selectedTopic === topic.id;
        return (
          <button
            key={topic.id}
            onClick={() => onSelectTopic(topic.id)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-200 text-left
              ${isActive
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:text-foreground hover:bg-accent"
              }`}
          >
            <Icon className="w-4 h-4 shrink-0" />
            <span>{topic.title}</span>
          </button>
        );
      })}
    </nav>
  );
}
