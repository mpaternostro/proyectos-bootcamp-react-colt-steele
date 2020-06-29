import React, { Component } from "react";
import "./Box.css";

class Box extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.deleteBox(this.props.index);
  }

  render() {
    return (
      <div className="Box">
        <div style={this.props.style}></div>
        <button onClick={this.onClick}>Remove</button>
      </div>
    );
  }
}

export default Box;
