import { useState } from "react";
export default function Input() {
  // UseState 4
  const [inputValue, setInputValue] = useState("");
  const [showValue, setShowValue] = useState(false);

  return (
    <div>
      {showValue && <div>{inputValue}</div>}
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button
        onClick={() => {
          setShowValue(true);
        }}
      >
        Show input value as a header
      </button>
    </div>
  );
}
