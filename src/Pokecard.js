import React, { Component } from "react";
import "./Pokecard.css";

export default class Pokecard extends Component {
  render() {
    const { id, name, type, exp } = this.props;
    return (
      <div className="Pokecard">
        <h3 className="Pokecard-name">{name}</h3>
        <img
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`}
          alt={name}
          className="Pokecard-image"
        />
        <p className="Pokecard-data">Type: {type}</p>
        <p className="Pokecard-data">EXP: {exp}</p>
      </div>
    );
  }
}
