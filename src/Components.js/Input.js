import { useState } from "react";
export default function Input() {
  // UseState 4
  const [inputValue, setInputValue] = useState("");
  const [showValue, setShowValue] = useState(false);

  const handleInput = () => {
    setShowValue(true);
  };

  return (
    <div>
      {showValue && <div>{inputValue}</div>}
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button onClick={handleInput}>Show input value as a header</button>
    </div>
  );
}
