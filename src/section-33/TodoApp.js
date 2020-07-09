import React from "react";
import useTodoState from "./hooks/useTodoState";
import { Paper, AppBar, Toolbar, Typography, Grid } from "@material-ui/core";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoApp() {
  const [
    todos,
    toggleCompleted,
    addTodo,
    deleteTodo,
    editTodo,
    toggleEdition,
  ] = useTodoState(JSON.parse(localStorage.getItem("todos")) || []);

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography variant="h6">Todo APP!</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center">
        <Grid item xs={12} md={8} lg={4}>
          <TodoList
            todos={todos}
            handleToggle={toggleCompleted}
            deleteTodo={deleteTodo}
            toggleEdition={toggleEdition}
            editTodo={editTodo}
          />
          <TodoForm variant="primary" elevation={1} addTodo={addTodo} />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
