import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [sandwiches, setSandwiches] = useState<
    { topping: string; bread: string; condiment: string }[]
  >([]);
  const [numSandwiches, setNumSandwiches] = useState(1);

  const toppings = ["Roast beef", "Egg og avocado", "Skinka og tomat", "Piparspeigpylsa", "Hvítleksspeigpylsa", "Speigpylsa", "Livradeiggj", "Brieostur", "Egg", "Avokado"];
  const breads = ["Chiabreyð", "Fullkornsbreyð"];
  const condiments = ["Dijonaise", "Majones", "Grønt pesto", "Reytt pesto", "Remoláta"];

  const generateSandwiches = () => {
    const newSandwiches: {
      topping: string;
      bread: string;
      condiment: string;
    }[] = [];
    for (let i = 0; i < numSandwiches; i++) {
      const topping = toppings[Math.floor(Math.random() * toppings.length)];
      const bread = breads[Math.floor(Math.random() * breads.length)];
      const condiment =
        condiments[Math.floor(Math.random() * condiments.length)];
      newSandwiches.push({ topping, bread, condiment });
    }
    setSandwiches(newSandwiches);
  };

  return (
    <div className="app">
      <label htmlFor="num-sandwiches">Tal av breyðflísum:</label>
      <input
        id="num-sandwiches"
        type="number"
        value={numSandwiches}
        onChange={(e) => setNumSandwiches(Number(e.target.value))}
      />
      <button onClick={generateSandwiches}>Smyr breyðflísar</button>
      <div className="sandwiches">
        {sandwiches.map((sandwich, index) => (
          <div key={index} className="sandwich">
            <p>Dressingur: {sandwich.condiment}</p>
            <p>Pálegg: {sandwich.topping}</p>
            <p>Breyð: {sandwich.bread}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
