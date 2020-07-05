import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Dog.css";

export class Dog extends Component {
  render() {
    const { name, src } = this.props.data;
    return (
      <Link className="Dog" to={`/dogs/${name}`}>
        <img src={src} alt={name} />
        <p>{name}</p>
      </Link>
    );
  }
}

export default Dog;
