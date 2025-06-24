

import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const catsList = ["😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾"];
  const [cat, setCat] = useState("😼");
  const [count, setCount] = useState(0)

  const getRandomCat = () => {
    const randomIndex = Math.floor(Math.random() * catsList.length);
    setCat(catsList[randomIndex]);
    setCount(count + 1); 
  };

  const resetCount = () => {
    setCount(0);
  }

  return (
    <div>
      <h1>Random Emoji Cat Generator </h1>
      <div className="cat-container">
        <p className="cat">{cat}</p>
        <button className="btn-cat" onClick={getRandomCat}>
          Get a Cat
        </button>
        <p>Button clicked {count} times</p>
        <button className="btn-cat" onClick={resetCount}>Reset Count</button>
      </div>
    </div>
  );
}

export default App;