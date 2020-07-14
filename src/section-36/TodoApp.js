import React from "react";
import { TodosProvider } from "./context/todos.context";
import { Paper, AppBar, Toolbar, Typography, Grid } from "@material-ui/core";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoApp() {
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
          <TodosProvider>
            <TodoList />
            <TodoForm variant="primary" elevation={1} />
          </TodosProvider>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
