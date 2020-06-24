import React, { Component } from "react";
import Coin from "./Coin";
import "./CoinFlip.css";

export default class CoinFlip extends Component {
  static defaultProps = {
    coins: [
      {
        side: "heads",
        imgSrc:
          "https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg",
      },
      {
        side: "tails",
        imgSrc:
          "http://www.pcgscoinfacts.com/UserImages/71009269r.jpg?__cf_chl_jschl_tk__=debde366b8bb053bf5ec905f255cbfa673a8dc6f-1592959604-0-AbAIETAYRgdxxbYqEDSpmc8RjLmElPOxCs_x4aDK_kFdAHMdliC2bhU_oSiDBipj2ni7Ktjdvw48FJXI1LV05TovNZorJOYzdCeGiPl9h1IHIGC_34S-sXuzbmCNXPgOq-wpVywAAy1fXB0JZE2b2CSs3zz2-LxwEG-5P_1w7vaJb_mV0Zs_OetGn81cuuYKiUPD9n0SiNqkLLXRQX0misxmi729NfWHhcmIqLT1ScuLe_-TdVR18pDDd3i2wWrF7Q-U3fX20xqZ_Xqejwg6qEdsc8jcaFwBc0iwXQRjzq8iVmho1yBoYAAyEHQRQHCoVQ",
      },
    ],
  };

  constructor(props) {
    super(props);
    this.state = {
      face: null,
      counter: {
        heads: 0,
        tails: 0,
      },
    };
    this.handleClick = this.handleClick.bind(this);
  }

  randomBool() {
    this.setState((curState) => {
      const index = Math.floor(Math.random() * 2);
      const newCounter = Object.create(curState.counter);
      index === 0 ? (newCounter.heads += 1) : (newCounter.tails += 1);
      return { face: this.props.coins[index], counter: newCounter };
    });
  }

  handleClick() {
    this.randomBool();
  }

  render() {
    return (
      <div className="CoinFlip">
        <h1>Let's flip a Coin!</h1>
        {this.state.face && <Coin data={this.state.face} />}
        <button onClick={this.handleClick}>Click to flip</button>
        <p>{`Out of ${
          this.state.counter.heads + this.state.counter.tails
        } flips, there have been ${this.state.counter.heads} heads and ${
          this.state.counter.tails
        } tails.`}</p>
      </div>
    );
  }
}
