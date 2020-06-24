import React, { Component } from "react";
import Pokegame from "./Pokegame";
import StateClicker from "./StateClicker";
import RollDice from "./RollDice";
import CoinFlip from "./CoinFlip";
import ColorBoxesContainer from "./ColorBoxesContainer";

import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <ColorBoxesContainer />
      </div>
    );
  }
}
