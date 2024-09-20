// import React from "react";
// import "./question.css"; // სწორი CSS ფაილის იმპორტი

export default function Question(props) {
  // კონსოლში პროპსების მონაცემების გამოტანა (დაწყობილია)
  console.log(props);

  return (
    <div className="question-div">
      <p
        className="question"
        onClick={() => {
          // თუ აქტიური კითხვაა, გაუქმდება აქტიურობა
          if (props.active === props.questionNumber) {
            props.setActive(0); // კითხვის გაუქმება
          } else {
            props.setActive(props.questionNumber); // კითხვის აქტივაცია
          }
        }}
      >
        {/* კითხვის ტექსტი */}
        Question {props.questionNumber}
      </p>

      {/* პასუხის ჩვენება თუ კითხვა აქტიურია */}
      {props.active === props.questionNumber ? (
        <p>Answer {props.questionNumber}</p>
      ) : null}
    </div>
  );
}
