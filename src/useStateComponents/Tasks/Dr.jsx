import React, { useState } from "react";

export default function Dr() {
  const [drop, setDrop] = useState(0);
  console.log(drop);
  return (
    <>
      <div>
        <p
          onClick={() => {
            if (drop === 1) {
              setDrop(0);
            } else {
              setDrop(1);
            }
          }}
        >
          question1
        </p>
        {drop === 1 ? <p>answer1</p> : null}

        <p
          onClick={() => {
            if (drop === 1) {
              setDrop(0);
            } else {
              setDrop(2);
            }
          }}
        >
          question2
        </p>
        {drop === 2 ? <p>answer2</p> : null}
      </div>
    </>
  );
}
