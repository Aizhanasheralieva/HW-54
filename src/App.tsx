import {useState} from "react";
import "./App.css";
import PlayField from "./Components/PlayField/PlayField.tsx";

const createItems = () => {
  const items = Array(36).fill({hasItem: false, clicked: false});
  const randomIndex = Math.floor(Math.random() * 36);
  items[randomIndex] = {hasItem: true, clicked: false};
  return items;
};

const App = () => {
  const [items, setItems] = useState(createItems());
  const [tries, setTries] = useState(0);
  const [endOfGame, setEndOfGame] = useState(false);


  return (
    <div className="App">
      <h1>Game</h1>
      <p>Tries: {tries}</p>
      <PlayField items={items}/>
    </div>
  );
};

export default App;
