import React, { Component } from "react";
import Pokegame from "./Pokegame";
import StateClicker from './StateClicker';

import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <StateClicker />
      </div>
    )
  }
}
