import React, { Component } from "react";
import "./NewTodoForm.css";

export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(evt) {
    this.setState({ title: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addItem(this.state.title);
    this.setState({ title: "" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="NewTodoForm">
        <h5>New Todo</h5>
        <div className="NewTodoForm-new">
          <input
            onChange={this.onChange}
            name="title"
            value={this.state.title}
          />
          <button>ADD TODO</button>
        </div>
      </form>
    );
  }
}
