import { useState } from "react";
//useState 3
export default function Disabled() {
  const [name, setName] = useState(true);

  return (
    <div>
      <button disabled={name}>Disabled: {name.toString()}</button>
      <button onClick={() => setName((prev) => !prev)}>
        Change state of the button on the left
      </button>
    </div>
  );
}
