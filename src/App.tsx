import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const d = new Date();
  const hours = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();

  const [count, setCount] = useState(0);
  const [hour, sethour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  function tick() {
    sethour(hours);
    setMinute(minutes);
    setSecond(seconds);
  }
  setInterval(tick, 1000);

  console.log("geht das?");

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
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
      <p className="">
        Die Zeit ist {hour}:{minute}:{second}
      </p>
    </>
  );
}

export default App;
