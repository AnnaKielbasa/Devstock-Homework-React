import React, { useState } from "react";

function ButtonInput() {
  // UseState 8
  const [inputValue, setInputValue] = useState([]);
  const [addToList, setAddToList] = useState();

  const handleButtonClick = () => {
    setInputValue((prevState) => [...prevState, addToList]);
    setAddToList([]);
  };
  return (
    <>
      <input type="text" onChange={(e) => setAddToList(e.target.value)} />
      <button onClick={handleButtonClick} type="submit">
        Add to list
      </button>

      {inputValue && (
        <>
          <ol>
            {inputValue.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </>
      )}
    </>
  );
}

export default ButtonInput;
