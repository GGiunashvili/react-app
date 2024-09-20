import React, { useState } from "react";

export default function Drop() {
  const [active, setActive] = useState(0); // ინახავს აქტიურ კითხვას
  console.log(active);

  return (
    <>
      <div className="container">
        <div className="question-div">
          <p
            className="question"
            onClick={() => {
              if (active === 1) {
                setActive(0);
              } else {
                setActive(1);
              }
            }}
          >
            Question 1
          </p>
        </div>
        {active === 1 ? <p>Answer 1</p> : null} {/* აქტიური კითხვის პასუხი */}
        <div className="question-div">
          <p
            className="question"
            onClick={() => {
              if (active === 2) {
                setActive(0);
              } else {
                setActive(2);
              }
            }}
          >
            Question 2
          </p>
        </div>
        {active === 2 ? <p>Answer 2</p> : null} {/* აქტიური კითხვის პასუხი */}
      </div>
    </>
  );
}
