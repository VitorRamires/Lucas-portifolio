import { useState } from "react";

interface CardContent {
  title: string;
  description: string;
}

export function Card({ title, description }: CardContent) {
  const [showCardClass, setShowCardClass] = useState(true);

  function handleCardText() {
    setShowCardClass(!showCardClass);
  }

  return (
    <>
      <div
        className={`card ${showCardClass ? "" : "show-text"}`}
        onClick={handleCardText}
      >
        <div className="card-title">
          <h2>{title}</h2>
          <img src="/src/assets/icons/focus.svg" />
        </div>
        <div className="card-text">
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}
