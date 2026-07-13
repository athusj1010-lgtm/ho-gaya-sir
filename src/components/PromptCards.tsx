import {
  Code2,
  GraduationCap,
  Search,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import "./PromptCards.css";

const cards = [
  {
    icon: <Code2 size={24} strokeWidth={2.3} />,
    title: "Code",
    desc: "Write and debug code.",
  },
  {
    icon: <GraduationCap size={24} strokeWidth={1.5} />,
    title: "Study",
    desc: "Learn step by step.",
  },
  {
    icon: <Search size={24} strokeWidth={2.3} />,
    title: "Research",
    desc: "Find accurate answers.",
  },
  {
    icon: <Sparkles size={24} strokeWidth={2.3} />,
    title: "More",
    desc: "Explore AI tools.",
  },
];

export default function PromptCards() {
  return (
    <section className="cards-grid">
      {cards.map((card) => (
        <button
          key={card.title}
          className="prompt-card"
          type="button"
        >
          <div className="card-icon">
            {card.icon}
          </div>

          <div className="card-content">
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>

          <div className="card-arrow">
            <ArrowRight size={0} strokeWidth={0} />
          </div>
        </button>
      ))}
    </section>
  );
}