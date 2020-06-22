import React, { Component } from 'react';

export default class StateClicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const number = Math.ceil(Math.random() * 10);
    this.setState({ number });
  }

  render() {
    return (
      <div>
        <h1>Number is {this.state.number}</h1>
        {
          this.state.number === 7
          ? <h1>You win!</h1>
          : <button onClick={this.handleClick}>Click to generate random number</button>
        }
      </div>
    )
  }
}
