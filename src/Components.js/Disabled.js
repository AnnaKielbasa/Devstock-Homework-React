import { useState } from "react";

export default function Disabled() {
  const [name, setName] = useState(true);

  const handleSetName = () => {
    setName((prev) => !prev);
  };
  return (
    <div>
      <button>{name ? "true" : "false"}</button>
      <button onClick={handleSetName}>
        Change state of the button on the left
      </button>
    </div>
  );
}
