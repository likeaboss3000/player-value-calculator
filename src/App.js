import React, { useState, useEffect } from "react";

import Calculator from "./components/Calculator";
import List from "./components/List";
import { PlayerContext } from "./context/PlayerContext";
import "./App.css";

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => console.log(players), [players, setPlayers]);
  return (
    <PlayerContext.Provider value={{ players, setPlayers }}>
      <div className="provider">
        <Calculator className="calculator" />
        <br />
        <br />
        <List className="list" />
      </div>
    </PlayerContext.Provider>
  );
}

export default App;
