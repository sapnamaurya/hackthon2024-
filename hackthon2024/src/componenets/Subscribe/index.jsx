import React, { useState } from "react";
import "./style.css";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email}`);
  };

  return (
    <section id="subscribe" className="subscribe-section">
      <h1 className="subs">Subscribe for Daily Motivation</h1>
      <form className="forms" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
};

export default Subscribe;
