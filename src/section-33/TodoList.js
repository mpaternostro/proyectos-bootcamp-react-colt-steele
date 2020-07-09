import React from "react";
import TodoItem from "./TodoItem";
import { Paper, List } from "@material-ui/core";

function TodoList(props) {
  const listItems = props.todos.map((todo) => (
    <TodoItem
      key={todo.id}
      data={todo}
      handleToggle={props.handleToggle}
      deleteTodo={props.deleteTodo}
      toggleEdition={props.toggleEdition}
      editTodo={props.editTodo}
    />
  ));
  return (
    <Paper style={{ marginTop: "1rem" }}>
      <List component="nav" aria-label="todo list" style={{ padding: "0" }}>
        <>{listItems}</>
      </List>
    </Paper>
  );
}

export default TodoList;
