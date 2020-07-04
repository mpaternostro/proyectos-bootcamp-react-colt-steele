import React, { Component } from "react";
import "./Joke.css";

export default class Joke extends Component {
  constructor(props) {
    super(props);
    this.handleUpvote = this.handleUpvote.bind(this);
    this.handleDownvote = this.handleDownvote.bind(this);
  }

  handleUpvote() {
    this.props.upvote(this.props.id);
  }

  handleDownvote() {
    this.props.downvote(this.props.id);
  }

  render() {
    let reaction;
    let style;
    let label;
    const { score, text } = this.props;
    if (score > 7) {
      reaction = "😍";
      style = "green";
      label = "love-eyes-face";
    } else if (score > 3) {
      reaction = "😅";
      style = "lightgreen";
      label = "sweat-face";
    } else if (score >= 0) {
      reaction = "😐";
      style = "yellow";
      label = "neutral-face";
    } else if (score < 0) {
      reaction = "😡";
      style = "red";
      label = "angry-face";
    }

    return (
      <div className="Joke">
        <div className="Joke-votes">
          <i
            className="fa fa-thumbs-up Joke-vote"
            onClick={this.handleUpvote}
          />
          <span className="Joke-score" style={{ borderColor: style }}>
            {score}
          </span>
          <i
            className="fa fa-thumbs-down Joke-vote"
            onClick={this.handleDownvote}
          />
        </div>
        <span className="Joke-text">{text}</span>
        <span role="img" aria-label={label} className="Joke-reaction">
          {reaction}
        </span>
      </div>
    );
  }
}
