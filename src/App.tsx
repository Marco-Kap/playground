import "./App.css";
import Counter from "./components/Counter";
import Clock from "./components/Clock";

function App() {
  return (
    <>
      <div>
        <button>
          <a href="#">CV</a>
        </button>
        <button>
          <a href="/components/Portfolio.tsx">Portfolio</a>
        </button>
      </div>
      <div id="canvas"></div>
      <div className="landing">
        <Counter />
        <Clock />
      </div>
    </>
  );
}

export default App;
