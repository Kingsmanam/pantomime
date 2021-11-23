import React from "react";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(1);
  const [hour, setHour] = useState(0);
  const [text, setText] = useState("");
  const numbers = [1, 2, 3, 4, 5, 6];
  const [showDice, setShowDice] = useState();

  const handleRoll = () => {
    const random = Math.floor(Math.random() * numbers.length + 1);
    setShowDice(random);
    setMinute(1);
  };

  const items = [
    "very easy",
    "easy",
    "normal",
    "intermediate",
    "hard",
    "very hard",
  ];

  const pantomime = [
    ["Apple", "Peach", "Grape"],
    ["پشمک", " کارآفرین", "شناسنامه"],
    [7, 8, 9],
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
  ];

  const handleClick = (i) => {
    const random = Math.floor(Math.random() * pantomime[i].length);
    setText(pantomime[i][random]);
    startTimer();
  };

  const startTimer = () => {
    setTimeout(() => {
      if (second > 0) {
        setSecond((prevsecond) => prevsecond - 1);
      } else if (second == 0 && minute > 0) {
        setMinute(minute - 1);
        setSecond(59);
      } else if (second == 0 && minute == 0 && hour > 0) {
        setHour(hour - 1);
        setMinute(59);
        setSecond(59);
      } else {
        clearInterval(startTimer); 
      }
    }, 1000);
  };

  useEffect(() => {
    if (text) {
      startTimer();
    }
  }, [second]);

  return (
    <div className="container">
      <div className="Rollcontainer">
        <div className="dice">
          {showDice === 1 ? (
            <i class="fas fa-dice-one"></i>
          ) : showDice === 2 ? (
            <i class="fas fa-dice-two"></i>
          ) : showDice === 3 ? (
            <i class="fas fa-dice-three"></i>
          ) : showDice === 4 ? (
            <i class="fas fa-dice-four"></i>
          ) : showDice === 5 ? (
            <i class="fas fa-dice-five"></i>
          ) : showDice === 6 ? (
            <i class="fas fa-dice-six"></i>
          ) : <p>Roll The Dice!</p>}
        </div>
        <button onClick={() => handleRoll()}>Roll Dice</button>
      </div>

      <div className="wordcontainer">
        <p>{text}</p>
      </div>

      <div className="items">
        {items.map((item, i) => {
          return (
            <button
              style={{
                backgroundColor: showDice == i + 1 ? "red" : "black",
              }}
              className="item"
              onClick={() => handleClick(i)}
              disabled={showDice == i + 1 ? false : true}
            >
              {item}
            </button>
          );
        })}
      </div>

      <div className="timer">
        <p style={{color: second == 0 && minute == 0 ? 'red' : 'black'}}>
          {hour < 10 ? `0${hour}` : `${hour}`} :{" "}
          {minute < 10 ? `0${minute}` : `${minute}`} :{" "}
          {second < 10 ? `0${second}` : `${second}`}
        </p>
      </div>
    </div>
  );
}

export default App;
