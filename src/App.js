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
  return (
    <>
      <Menu />
      <ButtonInput />
      <Button text="Anuluj" />
      <SayHello />
      <Disabled />
      <Input />
      <Table />
      <ShoppingList />
      <CurrentTime />
      <Counter/>
    </>
  );
}

export default App;
