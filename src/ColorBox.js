import React, { Component } from "react";
import { choice } from "./helpers";
import "./ColorBox.css";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: choice(this.props.colors),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  ranColor() {
    let color = choice(this.props.colors);
    color === this.state.color ? this.ranColor() : this.setState({ color });
  }

  handleClick() {
    this.ranColor();
  }

  render() {
    return (
      <div
        onClick={this.handleClick}
        className="ColorBox"
        style={{ backgroundColor: this.state.color }}
      ></div>
    );
  }
}

export default ColorBox;
