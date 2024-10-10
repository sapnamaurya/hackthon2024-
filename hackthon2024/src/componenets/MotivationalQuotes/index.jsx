import React, { useEffect } from "react";
import Typed from "typed.js";
import "./style.css";

const MotivationalQuotes = () => {
  useEffect(() => {
    const options = {
      strings: [
        "Push yourself, because no one else is going to do it for you.",
        "Your body can stand almost anything. It’s your mind you have to convince.",
        "Success starts with self-discipline.",
        "No pain, no gain.",
        "Today’s effort will pay off tomorrow.",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(".typed-quotes", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      id="quotes"
      className="motivational-quotes"
      //   style={{ background: `url(${quote})` }}
    >
      <h4>Stay Motivated</h4>
      <span className="typed-quotes"></span>
    </section>
  );
};

export default MotivationalQuotes;
