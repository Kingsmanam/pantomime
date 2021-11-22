import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [second, setSecond] = useState(10);
  const [minute, setMinute] = useState(1);
  const [hour, setHour] = useState(0);

  useEffect(() => {
    startTimer()
  },[second])
  
  const startTimer = () => {
    setTimeout(() => {
       if (second > 0) {
      setSecond(second - 1);
    } else if (second == 0 && minute > 0) {
      setMinute(minute - 1); setSecond(59)
    } else if (second == 0 && minute == 0 && hour > 0) {
      setHour(hour - 1); setMinute(59); setSecond(59)
    } else {
      clearInterval(startTimer);
    }
    }, 1000);
  }

  return (
    <div className="container">
      <p>
        {hour < 10 ? `0${hour}` : `${hour}`} :{" "}
        {minute < 10 ? `0${minute}` : `${minute}`} :{" "}
        {second < 10 ? `0${second}` : `${second}`}
      </p>
    </div>
  );  
}

export default App;
