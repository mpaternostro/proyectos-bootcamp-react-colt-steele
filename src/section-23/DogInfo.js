import React, { Component } from "react";
import "./DogInfo.css";

export class DogInfo extends Component {
  constructor(props) {
    super(props);
    this.handleBack = this.handleBack.bind(this);
  }

  handleBack() {
    this.props.history.goBack();
  }

  render() {
    const { age, facts, name, src } = this.props.data;
    const personalityFacts = facts.map((fact, i) => (
      <li key={i} className="list-group-item">
        {fact}
      </li>
    ));

    return (
      <div className="DogInfo card">
        <img src={src} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text text-muted">{age} years old</p>
        </div>
        <ul className="list-group list-group-flush">{personalityFacts}</ul>
        <div className="card-body">
          <button
            type="button"
            className="btn btn-success"
            onClick={this.handleBack}
          >
            Go Back!
          </button>
        </div>
      </div>
    );
  }
}

export default DogInfo;
