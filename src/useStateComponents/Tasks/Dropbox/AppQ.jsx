// import "./App.css"; // სწორი CSS ფაილის იმპორტი
import { useState } from "react";
import Question from "./Questions"; // სწორი ფაილის იმპორტი

function AppQ() {
  const [active, setActive] = useState(0); // ინახავს აქტიურ კითხვას
  console.log(active);
  //   const questionNumbers = [1, 2, 3, 4, 5];

  return (
    <>
      <div className="container">
        <Question active={active} setActive={setActive} questionNumber={1} />
        <Question active={active} setActive={setActive} questionNumber={2} />
        <Question active={active} setActive={setActive} questionNumber={3} />
        <Question active={active} setActive={setActive} questionNumber={4} />
        <Question active={active} setActive={setActive} questionNumber={5} />
      </div>
      {/* 
      <div className="container">
        {questionNumbers.map((questionNumber) => (
          <Question
            key={questionNumber}
            active={active}
            setActive={setActive}
            questionNumber={questionNumber}
          />
        ))}
      </div> */}
    </>
  );
}

export default AppQ;
