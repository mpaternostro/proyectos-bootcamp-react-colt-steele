import React from "react";
import { Paper, TextField, Button } from "@material-ui/core";
import { Save as SaveIcon } from "@material-ui/icons";
import useInputState from "./hooks/useInputState";

function TodoForm(props) {
  const [value, handleChange, reset] = useInputState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    props.addTodo(value);
    reset();
  }

  return (
    <Paper style={{ margin: "10px 0" }}>
      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        style={{ display: "flex", padding: "10px" }}
      >
        <TextField
          id="standard-basic"
          label="Add new task"
          style={{ flex: "1", margin: "4px" }}
          name="task"
          value={value}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          size="small"
          startIcon={<SaveIcon />}
          style={{ margin: "7px" }}
          type="submit"
        >
          Save
        </Button>
      </form>
    </Paper>
  );
}

export default TodoForm;
