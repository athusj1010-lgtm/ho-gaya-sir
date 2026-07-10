// src/components/PromptCards.tsx

const prompts = [
  {
    icon: "💻",
    title: "Coding",
    text: "Build a React portfolio website",
  },
  {
    icon: "📚",
    title: "Study",
    text: "Explain Quantum Physics simply",
  },
  {
    icon: "✈️",
    title: "Travel",
    text: "Plan a 5-day Japan trip",
  },
  {
    icon: "💼",
    title: "Business",
    text: "Startup ideas for students",
  },
];

export default function PromptCards() {
  return (
    <section className="prompt-section">

      <h3>Try asking...</h3>

      <div className="prompt-grid">

        {prompts.map((item) => (
          <button
            key={item.title}
            className="prompt-card"
          >
            <div className="prompt-icon">
              {item.icon}
            </div>

            <h4>{item.title}</h4>

            <p>{item.text}</p>
          </button>
        ))}

      </div>

    </section>
  );
}