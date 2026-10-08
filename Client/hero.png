import { useEffect, useRef, useState } from "react";

export default function Timer({ duration, isMyTurn }) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const intervalRef = useRef(null);

  useEffect(() => {
    setTimeLeft(duration);
    intervalRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(intervalRef.current);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [duration]); // re-runs when key changes (parent increments timerKey)

  const pct = (timeLeft / duration) * 100;
  const urgent = timeLeft <= 5;

  return (
    <div className="timer-container">
      <div className="timer-bar-track">
        <div
          className={`timer-bar ${urgent ? "urgent" : ""} ${isMyTurn ? "active" : ""}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className={`timer-number ${urgent ? "urgent" : ""}`}>
        {timeLeft}s
      </div>
    </div>
  );
}
