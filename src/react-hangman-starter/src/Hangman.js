import React, { Component } from "react";
import LetterButton from "./LetterButton";
import { randomWord } from "./words";
import "./Hangman.css";
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6],
  };

  constructor(props) {
    super(props);
    this.state = {
      nWrong: 0,
      guessed: new Set(),
      answer: randomWord(),
      hasWon: false,
    };
    this.handleGuess = this.handleGuess.bind(this);
    this.handleRestart = this.handleRestart.bind(this);
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    return this.state.answer
      .split("")
      .map((ltr) => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */

  handleWinCondition(newGuessed) {
    const hasWon = this.state.answer
      .split("")
      .every((ltr) => newGuessed.has(ltr));
    return hasWon;
  }

  handleGuess(evt) {
    console.log(evt.target.textContent);
    let ltr = evt.target.value;
    this.setState((st) => {
      const newState = Object.assign(st);
      newState.guessed = st.guessed.add(ltr);
      newState.nWrong = st.nWrong + (st.answer.includes(ltr) ? 0 : 1);
      newState.hasWon = this.handleWinCondition(newState.guessed);
      return newState;
    });
  }

  handleRestart(evt) {
    this.setState((st) => {
      const newState = Object.assign(st);
      newState.nWrong = 0;
      newState.guessed = new Set();
      newState.answer = randomWord();
      newState.hasWon = false;
      return newState;
    });
  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((ltr) => (
      <LetterButton
        key={ltr}
        value={ltr}
        handleGuess={this.handleGuess}
        disabled={this.state.guessed.has(ltr)}
      />
      // <button
      //   key={ltr}
      //   value={ltr}
      //   onClick={this.handleGuess}
      //   disabled={this.state.guessed.has(ltr)}
      // >
      //   {ltr}
      // </button>
    ));
  }

  /** render: render game */
  render() {
    const gameOver = this.state.nWrong >= this.props.maxWrong;
    return (
      <div className="Hangman">
        <h1>Hangman</h1>
        <img
          src={this.props.images[this.state.nWrong]}
          alt={`${this.state.nWrong} of ${this.props.maxWrong} guesses`}
        />
        <p>{`Wrong guesses: ${this.state.nWrong}`}</p>
        {this.state.hasWon && <h2>You have won</h2>}
        {gameOver ? (
          <div>
            <p className="Hangman-word">{this.state.answer}</p>
            <h1>Game Over!</h1>
          </div>
        ) : (
          <div>
            <p className="Hangman-word">{this.guessedWord()}</p>
            {!this.state.hasWon && (
              <p className="Hangman-btns">{this.generateButtons()}</p>
            )}
          </div>
        )}
        <button onClick={this.handleRestart} className="Hangman-button-restart">
          Restart
        </button>
      </div>
    );
  }
}

export default Hangman;
