import React, { Component } from "react";
import Pokegame from "./Pokegame";
import StateClicker from "./StateClicker";
import RollDice from "./RollDice";
import CoinFlip from "./CoinFlip";
import ColorBoxesContainer from "./ColorBoxesContainer";
import BoxList from "./section-14/BoxList";
import TodoList from "./section-15/TodoList";
import Game from "./section-16/Game";
import "./section-16/App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Game />
      </div>
    );
  }
}
