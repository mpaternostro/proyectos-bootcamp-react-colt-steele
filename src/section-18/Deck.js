import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
import "./Deck.css";

const API_BASE_URL = "https://deckofcardsapi.com/api/deck";

export default class Deck extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deckId: "",
      remaining: "",
      cards: [],
    };
    this.handleDraw = this.handleDraw.bind(this);
  }

  async componentDidMount() {
    const endpoint = `${API_BASE_URL}/new/shuffle/`;
    const response = await axios.get(endpoint);
    const data = response.data;
    this.setState({ deckId: data.deck_id, remaining: data.remaining });
  }

  async handleDraw() {
    try {
      const endpoint = `${API_BASE_URL}/${this.state.deckId}/draw/`;
      const response = await axios.get(endpoint);
      if (!response.data.success) {
        throw new Error(response.data.error);
      }
      const { remaining } = response.data;
      const card = response.data.cards[0];
      const rotate = Math.floor(Math.random() * 60) - 30;
      const translateX = Math.floor(Math.random() * 40) - 20;
      const translateY = Math.floor(Math.random() * 40) - 20;
      const transform = `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`;

      this.setState((st) => {
        return {
          cards: [
            ...st.cards,
            {
              id: card.code,
              img: card.images.png,
              name: `${card.value} of ${card.suit}`,
              transform,
            },
          ],
          remaining,
        };
      });
    } catch (err) {
      alert(err);
    }
  }

  render() {
    const cards = this.state.cards.map((card) => {
      const { id, img, name, transform } = card;
      return <Card key={id} img={img} name={name} transform={transform} />;
    });

    return (
      <div className="Deck">
        <h2>Card Drawer</h2>
        <button onClick={this.handleDraw}>Draw a card</button>
        <div className="Deck-stack">{cards}</div>
      </div>
    );
  }
}
