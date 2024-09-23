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

  const handleClick = (index) => {
    if (endOfGame || items[index].clicked) return;

    const newItems = [...items];
    newItems[index] = { ...newItems[index], clicked: true};
    setItems(newItems);
    setTries(tries + 1);

    if (newItems[index].hasItem) {
      setEndOfGame(true);
      alert(`Congratulations! You found the hidden item from ${tries + 1} tries!`);
    }
  };

  const handleReset = () => {
    setItems(createItems());
    setTries(0);
    setEndOfGame(false);
  };

  return (
    <div className="App">
      <h1>Game find the hidden item</h1>
      <p>Tries: {tries}</p>
      <PlayField items={items} handleClick={handleClick}/>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default App;
