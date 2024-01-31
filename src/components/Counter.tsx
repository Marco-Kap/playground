import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    return () => setCount((count) => count + 1);
  }
  function decrementCount() {
    return () => setCount((count) => count - 1);
  }

  return (
    <div className="card">
      <button onMouseDown={decrementCount()}>decrement count</button>
      <p>
        <div>{count}</div>
        <button
          onMouseDown={incrementCount()}
          onClick={() => setCount((count) => count + 1)}
        >
          increment count
        </button>
      </p>
    </div>
  );
}
