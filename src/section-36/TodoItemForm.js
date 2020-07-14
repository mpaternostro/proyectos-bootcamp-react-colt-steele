import React, { useContext } from "react";
import { IconButton, TextField } from "@material-ui/core";
import { Cancel as CancelIcon, Save as SaveIcon } from "@material-ui/icons";
import { DispatchContext } from "./context/todos.context";
import useInputState from "./hooks/useInputState";

function TodoItemForm({ id, task }) {
  const [editValue, handleChange] = useInputState(task);
  const dispatch = useContext(DispatchContext);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch({ type: "edit", id, task: editValue });
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
        onClick={() => dispatch({ type: "isEditing", id })}
      >
        <CancelIcon />
      </IconButton>
    </form>
  );
}

export default TodoItemForm;
