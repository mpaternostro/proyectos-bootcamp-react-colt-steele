import React, { Component } from "react";
import Joke from "./Joke";
import axios from "axios";
import "./DadJokes.css";
import "./spinner.css";

const API_URL = "https://icanhazdadjoke.com/";

export default class DadJokes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jokes: JSON.parse(localStorage.getItem("jokes") || "[]"),
      loading: false,
    };
    this.getJoke = this.getJoke.bind(this);
    this.newJokes = this.newJokes.bind(this);
    this.upvote = this.upvote.bind(this);
    this.downvote = this.downvote.bind(this);
  }

  async getJoke() {
    const response = await axios.get(API_URL, {
      headers: { Accept: "application/JSON" },
    });
    const { joke, id } = response.data;
    return { joke, id, score: 0 };
  }

  async newJokes() {
    this.setState({ loading: true });
    try {
      const jokesQty = 10;
      const jokes = [...this.state.jokes];
      let newJokesCounter = 0;
      while (newJokesCounter < jokesQty) {
        const newJoke = await this.getJoke();
        if (!this.state.jokes.some((joke) => joke.id === newJoke.id)) {
          newJokesCounter += 1;
          jokes.push(newJoke);
        }
      }
      this.setState({ jokes, loading: false });
    } catch (e) {
      alert(e);
      this.setState({ loading: false });
    }
  }

  upvote(id) {
    this.setState((st) => ({
      jokes: st.jokes.map((jk) => {
        if (jk.id === id) {
          const newJk = { ...jk };
          newJk.score += 1;
          return newJk;
        }
        return jk;
      }),
    }));
  }

  downvote(id) {
    this.setState((st) => ({
      jokes: st.jokes.map((jk) => {
        if (jk.id === id) {
          const newJk = { ...jk };
          newJk.score -= 1;
          return newJk;
        }
        return jk;
      }),
    }));
  }

  componentDidMount() {
    if (this.state.jokes.length === 0) this.newJokes();
  }

  componentDidUpdate() {
    localStorage.setItem("jokes", JSON.stringify(this.state.jokes));
  }

  render() {
    const jokes = [...this.state.jokes]
      .sort((a, b) => b.score - a.score)
      .map((jk) => (
        <Joke
          key={jk.id}
          id={jk.id}
          text={jk.joke}
          score={jk.score}
          upvote={this.upvote}
          downvote={this.downvote}
        />
      ));

    return (
      <div className="DadJokes">
        <div className="DadJokes-sidebar">
          <h1 className="DadJokes-title">
            <span>Dad</span> Jokes
          </h1>
          <span className="DadJokes-lol" role="img" aria-label="lol emoji">
            😂
          </span>
          <button onClick={this.newJokes}>New jokes</button>
        </div>
        <div
          className={`DadJokes-jokelist${
            this.state.loading ? " DadJokes-jokelist--loading" : ""
          }`}
        >
          {this.state.loading ? (
            <div className="loader">Loading...</div>
          ) : (
            jokes
          )}
        </div>
      </div>
    );
  }
}
