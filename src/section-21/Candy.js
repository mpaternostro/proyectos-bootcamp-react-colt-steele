import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Candy extends Component {
  render() {
    return (
      <div>
        {this.props.candies ? (
          <div>
            <h1>Pick what you want</h1>
            <ul>
              {this.props.candies.map((candy) => (
                <li>{candy}</li>
              ))}
            </ul>
          </div>
        ) : (
          <h1>Sorry, we're out of candies stock</h1>
        )}
        <Link to="/">Go back to main page</Link>
      </div>
    );
  }
}

export default Candy;
