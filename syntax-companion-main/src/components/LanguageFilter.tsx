import type { Language } from "@/data/topics";
import { LANGUAGE_LABELS } from "@/data/topics";

interface LanguageFilterProps {
  selected: Language[];
  onChange: (langs: Language[]) => void;
}

const LANG_COLORS: Record<Language, string> = {
  java: "bg-lang-java/20 border-lang-java text-lang-java",
  python: "bg-lang-python/20 border-lang-python text-lang-python",
  c: "bg-lang-c/20 border-lang-c text-lang-c",
  cpp: "bg-lang-cpp/20 border-lang-cpp text-lang-cpp",
};

const LANG_ACTIVE: Record<Language, string> = {
  java: "bg-lang-java text-background",
  python: "bg-lang-python text-background",
  c: "bg-lang-c text-background",
  cpp: "bg-lang-cpp text-background",
};

export default function LanguageFilter({ selected, onChange }: LanguageFilterProps) {
  const toggle = (lang: Language) => {
    if (selected.includes(lang)) {
      if (selected.length > 1) onChange(selected.filter((l) => l !== lang));
    } else {
      onChange([...selected, lang]);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-muted-foreground font-medium">Languages:</span>
      {(Object.keys(LANGUAGE_LABELS) as Language[]).map((lang) => {
        const isActive = selected.includes(lang);
        return (
          <button
            key={lang}
            onClick={() => toggle(lang)}
            className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all duration-200 font-mono
              ${isActive ? LANG_ACTIVE[lang] : LANG_COLORS[lang] + " opacity-60 hover:opacity-100"}`}
          >
            {LANGUAGE_LABELS[lang]}
          </button>
        );
      })}
    </div>
  );
}
