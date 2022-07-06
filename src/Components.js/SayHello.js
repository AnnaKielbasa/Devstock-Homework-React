import { useState } from "react";
// UseState 1,2
export default function SayHello() {
  const [name, setName] = useState("Przywitaj się");
  const [stranger, setStranger] = useState("Nieznajomy");

  return (
    <div>
      <button onClick={() => setStranger("Anka")}>{name}</button>
      <div>Witaj {stranger}</div>
    </div>
  );
}
