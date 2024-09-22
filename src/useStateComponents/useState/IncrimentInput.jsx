import React, { useState } from "react";

export default function Inc() {
  const [input, setInput] = useState("Name");
  const [counter, setCounter] = useState(0);

  function handle(e) {
    setInput(e.target.value);
  }
  function count() {
    setCounter((prevCounter) => prevCounter + 1);
  }
  console.log(input);

  return (
    <>
      <input onChange={handle} type="text" />

      <button
        onClick={() => {
          count();
          count();
          count();
        }}
      >
        btn
      </button>

      <p>
        your name is {input} and your age is {counter}
      </p>
    </>
  );
}
