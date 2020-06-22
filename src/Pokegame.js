import React, { Component } from "react";
import Pokedex from "./Pokedex";

export default class Pokegame extends Component {
  static defaultProps = {
    pokemons: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
    ],
  };

  render() {
    const shuffledPokemons = [];
    const remainingPokemons = [...this.props.pokemons];
    for (let i = 0; i < this.props.pokemons.length; i += 1) {
      const j = Math.floor(Math.random() * remainingPokemons.length);
      shuffledPokemons.push(...remainingPokemons.splice(j, 1));
    }

    const hands = [shuffledPokemons.slice(0, 4), shuffledPokemons.slice(4, 8)];
    const totalExp = hands.map((hand) => {
      return hand.reduce(
        (acc, currValue) => (acc += currValue["base_experience"]),
        0
      );
    });
    const isWinner = [];
    if (totalExp[0] > totalExp[1]) {
      isWinner.push(true, false);
    } else {
      isWinner.push(false, true);
    }

    return (
      <div>
        {hands.map((hand, i) => (
          <Pokedex
            key={hand[0].id}
            pokemons={hand}
            totalExp={totalExp[i]}
            isWinner={isWinner[i]}
            handNumber={i + 1}
          />
        ))}
      </div>
    );
  }
}
