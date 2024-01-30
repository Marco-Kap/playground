import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const d = new Date();
  const hours = d.getHours().toString().padStart(2, "0");
  const minutes = d.getMinutes().toString().padStart(2, "0");
  const seconds = d.getSeconds().toString().padStart(2, "0");

  const [count, setCount] = useState(0);
  const [time, setTime] = useState("");

  function tick() {
    setTime(hours + ":" + minutes + ":" + seconds);
  }
  setInterval(tick, 1000);

  console.log("geht das?");

  return (
    <>
      <div id="canvas"></div>

      <div className="card">
        <button onClick={() => setCount((count) => count - 1)}>
          decrement count currently: {count}
        </button>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            increment count currently: {count}
          </button>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="timer">Die Zeit ist {time}</p>
    </>
  );
}

export default App;
