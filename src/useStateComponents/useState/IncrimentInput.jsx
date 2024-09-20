import { useState } from "react";
import Counter from "./Counter";
export default function IncimentInput() {
  const [input, setInput] = useState("");
  const [counter, setCounter] = useState(0);

  function addText(e) {
    setInput(e.target.value);
  }

  function count() {
    setCounter((a) => a + 1);
  }
  return (
    <>
      <input onChange={addText} type="text" />
      <button
        onClick={() => {
          count();
          count();
          count();
        }}
      >
        inctiment+1
      </button>
      <h1>
        hello , {input}. you are {counter}
      </h1>
    </>
  );
}
