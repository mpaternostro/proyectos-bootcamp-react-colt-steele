import React from "react";
import {
  ListItem,
  Checkbox,
  ListItemIcon,
  ListItemText,
  IconButton,
  ListItemSecondaryAction,
  Divider,
} from "@material-ui/core";
import { Delete as DeleteIcon, Edit as EditIcon } from "@material-ui/icons";
import TodoItemForm from "./TodoItemForm";

function TodoItem({ data, handleToggle, deleteTodo, toggleEdition, editTodo }) {
  return (
    <>
      <ListItem style={{ height: "64px" }}>
        <ListItemIcon>
          <Checkbox
            checked={data.completed}
            color="default"
            onClick={() => handleToggle(data.id)}
          />
        </ListItemIcon>
        {data.isEditing ? (
          <TodoItemForm
            id={data.id}
            task={data.task}
            editTodo={editTodo}
            toggleEdition={toggleEdition}
          />
        ) : (
          <>
            <ListItemText
              style={{
                textDecoration: data.completed ? "line-through" : "none",
                color: data.completed ? "gray" : "black",
              }}
              primary={data.task}
            />
            <ListItemSecondaryAction>
              <IconButton
                aria-label="edit"
                onClick={() => toggleEdition(data.id)}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                aria-label="delete"
                onClick={() => deleteTodo(data.id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </>
        )}
      </ListItem>
      <Divider />
    </>
  );
}

export default TodoItem;
