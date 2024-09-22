import { useState } from "react";

export default function Checkbox() {
  const [check, setChecked] = useState(false);
  console.log(check); // function clicked() {
  //   if (check) {
  //     setChecked(false);
  //   } else {
  //     setChecked(true);
  //   }
  // }
  // function clicked() {
  //   setChecked((prevCheck) => !prevCheck);
  // }
  function clicked(e) {
    setChecked(e.target.checked); // checkbox-ის სტატუსს პირდაპირ ვაყენებთ
  }
  return (
    <>
      <label>
        <input onChange={clicked} type="checkbox" />
        label
      </label>

      <p
        style={{
          ...(check
            ? { color: "white", backgroundColor: "green" }
            : { color: "black", backgroundColor: "red" }),

          fontSize: "24px",
          margin: "20px",
        }}
      >
        {check ? "checked" : "not checked"}
      </p>
    </>
  );
}
