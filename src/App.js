import React from "react";
import RollDice from "./RollDice";
import "./App.css";

function App() {
  const items = [
    "very easy",
    "easy",
    "normal",
    "intermediate",
    "hard",
    "very hard",
  ];

  return (
    <div className="container">
      <div>
        <RollDice />
      </div>

      <div className="items">
        {items.map((item) => {
          return <div className="item">{item}</div>;
        })}
      </div>
    </div>
  );
}

export default App;
