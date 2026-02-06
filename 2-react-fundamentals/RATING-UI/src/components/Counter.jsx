import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h2>Counter : {count}</h2>
      <button onClick={increment}>Increment</button>
    </>
  );
};

export default Counter;
