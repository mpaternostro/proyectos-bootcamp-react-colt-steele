import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Chocolate extends Component {
  render() {
    return (
      <div>
        <h1>Pick what you want</h1>
        <ul>
          {this.props.chocolates.map((choco, i) => (
            <li key={i}>{choco}</li>
          ))}
        </ul>
        <Link to="/">Go back to main page</Link>
      </div>
    );
  }
}

export default Chocolate;
