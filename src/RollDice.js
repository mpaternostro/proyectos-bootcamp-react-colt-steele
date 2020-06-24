import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

export default class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };

  constructor(props) {
    super(props);
    this.state = {
      diceOne: "one",
      diceTwo: "six",
      rolling: false,
    };
    this.roll = this.roll.bind(this);
  }

  randomNum() {
    return Math.floor(Math.random() * this.props.sides.length);
  }

  roll() {
    this.setState({
      diceOne: this.props.sides[this.randomNum()],
      diceTwo: this.props.sides[this.randomNum()],
      rolling: true,
    });
    setTimeout(() => this.setState({ rolling: false }), 1000);
  }

  render() {
    return (
      <div>
        <div>
          <Die face={this.state.diceOne} rolling={this.state.rolling} />
          <Die face={this.state.diceTwo} rolling={this.state.rolling} />
        </div>
        <button
          onClick={this.roll}
          className="RollDice-button"
          disabled={this.state.rolling}
        >
          {this.state.rolling === false ? "Roll Dices!" : "Rolling!"}
        </button>
      </div>
    );
  }
}
