import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick(this.props.idx);
  }

  render() {
    let classes = "Die fa-5x fas fa-dice-";
    classes += this.props.val;
    if (this.props.locked) classes += " Die-locked";
    if (this.props.isRolling && !this.props.locked) classes += " Die-rolling";

    return (
      <i
        className={classes}
        onClick={this.handleClick}
        disabled={this.props.disabled}
      />
    );
  }
}

export default Die;
