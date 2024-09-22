import { useState } from "react";

export default function Counter() {
  const [count, setcount] = useState(2);

  function increment() {
    if (count == "empty") {
      setcount(1);
    } else if (count < 10) {
      setcount(count + 1);
    }
  }
  function decrement() {
    if (count > 1) {
      setcount(count - 1);
    } else count <= 1;
    {
      setcount("empty");
    }
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={decrement}>decriment</button>
      <button onClick={increment}>incriment</button>
    </>
  );
}
