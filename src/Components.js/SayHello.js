import { useState } from "react";
// UseState 1,2
export default function SayHello() {
  const [name, setName] = useState("Przywitaj się");
  const [stranger, setStranger] = useState("nieznajomy");
  const changeName = () => {
    setStranger("Anka");
  };
  return (
    <div>
      <button onClick={changeName}>{name}</button>
      <div>Witaj {stranger}</div>
    </div>
  );
}
