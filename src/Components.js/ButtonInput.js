import React, { useState, useEffect } from "react";

function ButtonInput() {
  // UseEffect 1
  useEffect(() => {
    alert("Cześć");
  },[]);
  // UseState 8
  const [inputValue, setInputValue] = useState([]);
  const [addToList, setAddToList] = useState([]);

  const handleSetAddToList = (event) => {
    event.preventDefault();
    setAddToList(event.target.value);
  };
  const handleButtonClick = (event) => {
    event.preventDefault();
    setInputValue((prevState) => [...prevState, addToList]);
    setAddToList([]);
  };
  return (
    <>
      <input type="text" onChange={handleSetAddToList} />
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
