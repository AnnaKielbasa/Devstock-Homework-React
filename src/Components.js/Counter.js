import { useEffect, useState } from "react";
// UseEffect 5
const list = [
  "butter",
  "egg",
  "apple",
  "painting",
  "bed",
  "lamp",
  "keybord",
  "umbrella",
  "mayo",
  "newspaper",
];
function Counter() {
  const [count, setCount] = useState(0);
  const [showList, setShowList] = useState([]);
  useEffect(() => {
    const filteredList = list.slice(0, count);
    setShowList(filteredList);
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
      <div>{count}</div>
      <button onClick={() => setCount(count < 10 ? count + 1 : 10)}>+</button>

      <ol>
        {showList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </div>
  );
}

export default Counter;
