import { useState } from "react";

export default function Clock() {
  const d = new Date();
  const hours = d.getHours().toString().padStart(2, "0");
  const minutes = d.getMinutes().toString().padStart(2, "0");
  const seconds = d.getSeconds().toString().padStart(2, "0");
  const [time, setTime] = useState("");

  function tick() {
    setTime(hours + ":" + minutes + ":" + seconds);
  }
  setInterval(tick, 1000);

  return <p className="timer">The Time is {time}</p>;
}
