import React, { useContext } from "react";
import { TodosContext } from "./context/todos.context";
import TodoItem from "./TodoItem";
import { Paper, List } from "@material-ui/core";

function TodoList(props) {
  const state = useContext(TodosContext);
  const listItems = state.todos.map((todo) => (
    <TodoItem key={todo.id} data={todo} />
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
