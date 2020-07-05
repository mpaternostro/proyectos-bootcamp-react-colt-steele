import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Refreshers extends Component {
  render() {
    return (
      <div>
        <h1>Pick what you want</h1>
        <ul>
          {this.props.refreshers.map((refresh, i) => (
            <li key={i}>{refresh}</li>
          ))}
        </ul>
        <Link to="/">Go back to main page</Link>
      </div>
    );
  }
}

export default Refreshers;
