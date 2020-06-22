import React, { Component, Fragment } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

export default class Pokedex extends Component {
  render() {
    const adaptId = (id = 1) => `00${id}`.slice(-3);
    const { totalExp, isWinner, handNumber } = this.props;

    const winnerMsg = isWinner && (
      <h1 className="Pokedex-winner">THIS HAND WINS!</h1>
    );
    const expMsg = (
      <p className="Pokedex-exp">
        Hand {handNumber}, Total Exp: {totalExp}
      </p>
    );

    return (
      <div className="Pokedex">
        {handNumber === 2 && (
          <Fragment>
            {winnerMsg}
            {expMsg}
          </Fragment>
        )}
        {this.props.pokemons.map((pokemon) => (
          <Pokecard
            key={pokemon.id}
            id={adaptId(pokemon.id)}
            name={pokemon.name}
            type={pokemon.type}
            exp={pokemon["base_experience"]}
          />
        ))}
        {handNumber === 1 && (
          <Fragment>
            {expMsg}
            {winnerMsg}
          </Fragment>
        )}
      </div>
    );
  }
}
