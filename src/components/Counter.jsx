import React from "react";

function Counter() {
  const [count, setCount] = React.useState(0);
  const max = 5;
  const min = -5;
  return (
    <div className="counter">
      <h1
        className={`count ${count === max ? "max" : count === min ? "min" : ""}`}
      >
        {count}
      </h1>
      <div className="buttons">
        <button onClick={() => setCount(count + 1)} disabled={count === max}>
          +
        </button>
        <button onClick={() => setCount(count - 1)} disabled={count === min}>
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;
