import React, { useState } from "react";
const shoppingList = ["Tomatoes", "Green Peas", "Formula", "Stickers"];
function ShoppingList() {
  // UseState 7
  const [showList, setShowList] = useState(false);
  const handleSetShowList = () => {
    setShowList((prev) => !prev);
  };
  return (
    <>
      <button onClick={handleSetShowList}>Show list</button>
      {showList && (
        <>
          <div>ShoppingList</div>
          <ul>
            {shoppingList.map((value) => (
              <li>{value}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default ShoppingList;
