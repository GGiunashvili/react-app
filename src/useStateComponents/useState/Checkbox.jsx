import { useState } from "react";

export default function Checkbox() {
  const [check, setCheck] = useState(false);
  function handleChange(e) {
    setCheck(e.target.checked);
  }
  return (
    <>
      <label>
        <input type="checkbox" checked={check} onChange={handleChange} />
        label
      </label>
      <p
        style={{
          ...(check
            ? { backgroundColor: "green", padding: "20px" }
            : { backgroundColor: "red", padding: "22px" }),
        }}
      >
        {check ? "checked" : "nocheck"}
      </p>
    </>
  );
}
