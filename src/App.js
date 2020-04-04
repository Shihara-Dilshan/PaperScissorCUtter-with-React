import React from "react";

import "./App.css";

import Logic from "./components/logic";
import Counter from "./components/counter";
import Game from "./components/game";

function App() {
  return (
    <div className="App">
      <Counter />
      <Logic />
      <Game />
    </div>
  );
}

export default App;
