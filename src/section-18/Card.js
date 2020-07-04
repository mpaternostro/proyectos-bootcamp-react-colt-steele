import React, { Component } from "react";
import "./Card.css";

export default class Card extends Component {
  render() {
    return (
      <img
        className="Card"
        src={this.props.img}
        alt={this.props.name}
        style={{ transform: this.props.transform }}
      />
    );
  }
}
