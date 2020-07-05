import React, { Component } from "react";
import Dog from "./Dog";
import "./Dogs.css";

export class Dogs extends Component {
  render() {
    const dogs = this.props.dogsData.map((dog, i) => (
      <Dog data={dog} key={i} />
    ));

    return <div className="Dogs">{dogs}</div>;
  }
}

export default Dogs;
