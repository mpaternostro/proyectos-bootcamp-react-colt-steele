import React, { Component } from "react";
import ColorBox from "./ColorBox";
// import { choice } from "./helpers";
import "./ColorBoxesContainer.css";

class ColorBoxesContainer extends Component {
  static defaultProps = {
    colors: ["blue", "green", "red", "purple", "teal", "gray"],
    maxBoxes: 18,
  };

  render() {
    return (
      <div className="ColorBoxesContainer">
        {Array.from({ length: this.props.maxBoxes }).map(() => (
          <ColorBox colors={this.props.colors} />
        ))}
      </div>
    );
  }
}

export default ColorBoxesContainer;
