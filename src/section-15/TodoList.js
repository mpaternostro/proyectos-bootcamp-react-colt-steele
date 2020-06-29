import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastId: 2,
      todos: [],
    };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.toggleEdition = this.toggleEdition.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }

  addItem(title) {
    const { lastId } = this.state;
    const todo = { title, completed: false, isEditing: false, id: lastId + 1 };
    this.setState((st) => {
      const { todos: newTodos } = st;
      return { lastId: todo.id, todos: [...newTodos, todo] };
    });
  }

  removeItem(id) {
    this.setState((st) => {
      const newTodos = st.todos.filter((todo) => todo.id !== id);
      return { todos: newTodos };
    });
  }

  editItem(id, title) {
    this.setState((st) => {
      const newTodos = st.todos.map((todo) => {
        const newTodo = { ...todo };
        if (newTodo.id === id) {
          newTodo.title = title;
          newTodo.isEditing = false;
        }
        return newTodo;
      });
      return { todos: newTodos };
    });
  }

  toggleEdition(id) {
    this.setState((st) => {
      const newTodos = st.todos.map((todo) => {
        const newTodo = { ...todo };
        if (todo.id === id) {
          newTodo.isEditing = true;
        }
        return newTodo;
      });
      return { todos: newTodos };
    });
  }

  toggleCompletion(id) {
    this.setState((st) => {
      const newTodos = st.todos.map((todo) => {
        const newTodo = { ...todo };
        if (newTodo.id === id) {
          newTodo.completed = !newTodo.completed;
        }
        return newTodo;
      });
      return { todos: newTodos };
    });
  }

  render() {
    const todos = this.state.todos.map((todo) => (
      <Todo
        key={todo.id}
        id={todo.id}
        title={todo.title}
        completed={todo.completed}
        isEditing={todo.isEditing}
        removeItem={this.removeItem}
        editItem={this.editItem}
        toggleEdition={this.toggleEdition}
        toggleCompletion={this.toggleCompletion}
      />
    ));

    return (
      <div className="TodoList">
        <h1>Todo List!</h1>
        <p>A simple React Todo List App</p>
        <table className="TodoList-table">
          <tbody className="TodoList-Todos">{todos}</tbody>
        </table>
        <NewTodoForm addItem={this.addItem} />
      </div>
    );
  }
}
