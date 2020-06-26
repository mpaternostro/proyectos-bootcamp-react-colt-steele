import React, { Component } from "react";

class LetterButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    console.log(evt);
    this.props.handleGuess(evt);
  }

  render() {
    return (
      <button
        onClick={this.handleClick}
        disabled={this.props.disabled}
        value={this.props.value}
      >
        {this.props.value}
      </button>
    );
  }
}

export default LetterButton;
