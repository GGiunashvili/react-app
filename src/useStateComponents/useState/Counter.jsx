import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(1);
  function incriment() {
    setCounter(counter + 1);
  }
  function decriment() {
    setCounter(counter - 1);
  }
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={decriment}>decriment</button>
      <button onClick={incriment}>incriment</button>
    </>
  );
}
