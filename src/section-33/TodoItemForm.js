import React from "react";
import { IconButton, TextField } from "@material-ui/core";
import { Cancel as CancelIcon, Save as SaveIcon } from "@material-ui/icons";
import useInputState from "./hooks/useInputState";

function TodoItemForm({ id, task, editTodo, toggleEdition }) {
  const [editValue, handleChange] = useInputState(task);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    editTodo(id, editValue);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ width: "100%", display: "flex", alignItems: "center" }}
    >
      <TextField
        fullWidth
        value={editValue}
        onChange={handleChange}
        autoFocus
      />
      <IconButton aria-label="save" type="submit">
        <SaveIcon />
      </IconButton>
      <IconButton
        aria-label="cancel-edit"
        onClick={() => {
          toggleEdition(id);
        }}
      >
        <CancelIcon />
      </IconButton>
    </form>
  );
}

export default TodoItemForm;
