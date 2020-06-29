import React, { Component, Fragment } from "react";
import "./Todo.css";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editTitle: this.props.title,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEditMode = this.handleEditMode.bind(this);
    this.handleCompletion = this.handleCompletion.bind(this);
  }

  handleChange(evt) {
    this.setState({ editTitle: evt.target.value });
  }

  handleDelete() {
    this.props.removeItem(this.props.id);
  }

  handleEdit() {
    this.props.editItem(this.props.id, this.state.editTitle);
  }

  handleEditMode() {
    this.props.toggleEdition(this.props.id);
  }

  handleCompletion() {
    this.props.toggleCompletion(this.props.id);
  }

  render() {
    return (
      <tr className="Todo">
        {!this.props.isEditing ? (
          <Fragment>
            <td
              className={`Todo-title${
                this.props.completed ? " Todo-title--completed" : ""
              }`}
              onClick={this.handleCompletion}
            >
              {this.props.title}
            </td>
            <td>
              <button onClick={this.handleEditMode}>Edit</button>
            </td>
            <td>
              <button onClick={this.handleDelete}>Delete</button>
            </td>
          </Fragment>
        ) : (
          <Fragment>
            <td className="Todo-title">
              <input
                onChange={this.handleChange}
                value={this.state.editTitle}
                name="editTitle"
              />
            </td>
            <td>
              <button onClick={this.handleEdit}>Save</button>
            </td>
          </Fragment>
        )}
      </tr>
    );
  }
}
