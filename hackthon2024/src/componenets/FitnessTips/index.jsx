import React from "react";
import "./style.css";

const FitnessTips = () => {
  const tips = [
    {
      title: "Stay Hydrated",
      description:
        "Drink plenty of water before, during, and after your workout.",
    },
    {
      title: "Get Enough Sleep",
      description:
        "Rest is just as important as working out to keep your body strong.",
    },
    {
      title: "Eat Protein",
      description: "Incorporate protein in your meals to fuel muscle growth.",
    },
    {
      title: "Consistency is Key",
      description: "Consistency beats intensity when it comes to fitness.",
    },
  ];

  return (
    <section id="tips" className="fitness-tips">
      <h2>Fitness Tips</h2>
      <div className="tips-container">
        {tips.map((tip, index) => (
          <div key={index} className="tip">
            <h3>{tip.title}</h3>
            <p>{tip.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FitnessTips;
