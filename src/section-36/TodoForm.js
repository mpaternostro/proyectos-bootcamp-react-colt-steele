import React, { useContext } from "react";
import { DispatchContext } from "./context/todos.context";
import { Paper, TextField, Button } from "@material-ui/core";
import { Save as SaveIcon } from "@material-ui/icons";
import useInputState from "./hooks/useInputState";

function TodoForm() {
  const [value, handleChange, reset] = useInputState("");
  const dispatch = useContext(DispatchContext);

  function handleSubmit(evt) {
    evt.preventDefault();
    dispatch({ type: "add", task: value });
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
