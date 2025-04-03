import { useState } from "react";

interface CardContent {
  title: string;
  description: string;
}

export function Card({ title, description }: CardContent) {
  const [showCardClass, setShowCardClass] = useState("");

  function handleCardText() {
    setShowCardClass("show-text");
    if (showCardClass == "show-text") {
      setShowCardClass("");
    } else {
      setShowCardClass("show-text");
    }
  }

  return (
    <>
      <div className={`card ${showCardClass}`} onClick={handleCardText}>
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
