import { useState } from "react";
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
      <div>
        <button>
          <a href="https://reactjs.org">CV</a>
        </button>
        <button>
          <a href="https://vitejs.dev">Portfolio</a>
        </button>
      </div>
      <div id="canvas"></div>
      <div className="card">
        <button on onClick={() => setCount((count) => count - 1)}>
          decrement count
        </button>
        <p>
          <div>{count}</div>
          <button onClick={() => setCount((count) => count + 1)}>
            increment count
          </button>
        </p>
      </div>
      <p className="timer">The Time is {time}</p>
    </>
  );
}

export default App;
