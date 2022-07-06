import { useEffect } from "react";

import "./App.css";
import Menu from "./Components.js/Menu";
import Button from "./Components.js/Button";
import SayHello from "./Components.js/SayHello";
import Disabled from "./Components.js/Disabled";
import Input from "./Components.js/Input";
import Table from "./Components.js/Table/Table";
import ShoppingList from "./Components.js/ShoppingList";
import ButtonInput from "./Components.js/ButtonInput";
import CurrentTime from "./Components.js/Time";
import Counter from "./Components.js/Counter";

function App() {
  // UseEffect 1:
  useEffect(() => {
    alert("Cześć");
  }, []);
  return (
    <>
      {/* nadawanie właścwości komponentom funkcyjnym  4,5,6 */}
      <Menu />

      <Button text="Anuluj" />
      {/* UseState 1,2: */}
      <SayHello />
      {/* UseState 3: */}
      <Disabled />
      {/* UseState 4: */}
      <Input />
      {/* UseState 6: */}
      <Table />
      {/* UseState 7: */}
      <ShoppingList />
      {/* UseState 8: */}
      <ButtonInput />
      {/* UseEffect 4: */}
      <CurrentTime />
      {/* UseEffect 5: */}
      <Counter />
    </>
  );
}

export default App;
