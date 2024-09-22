import React, { useState } from "react";

export default function () {
  const [nameInput, setNameInput] = useState("");
  const [surnameInput, setSurNameInput] = useState("");

  function nameInputF(e) {
    setNameInput(e.target.value);
  }
  function surnameInputF(e) {
    setSurNameInput(e.target.value);
  }

  function reset() {
    setNameInput("");
    setSurNameInput("");
  }
  return (
    <>
      <input
        value={nameInput}
        onChange={nameInputF}
        type="text"
        placeholder="name"
      />

      <input
        value={surnameInput}
        onChange={surnameInputF}
        type="text"
        placeholder="surname"
      />

      <p>Your name is NAme and surname is SRNAME</p>

      <button onClick={reset}>reset</button>
    </>
  );
}
