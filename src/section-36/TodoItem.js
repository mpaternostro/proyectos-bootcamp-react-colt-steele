import React, { useContext, memo } from "react";
import { DispatchContext } from "./context/todos.context";
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

export default memo(function TodoItem({ data }) {
  const dispatch = useContext(DispatchContext);

  return (
    <>
      <ListItem style={{ height: "64px" }}>
        <ListItemIcon>
          <Checkbox
            checked={data.completed}
            color="default"
            onClick={() => dispatch({ type: "isCompleted", id: data.id })}
          />
        </ListItemIcon>
        {data.isEditing ? (
          <TodoItemForm
            id={data.id}
            task={data.task}
            // edit={dispatch}
            // editTodo={dispatch({ type: "edit", id: data.id, task:  })}
            // toggleEdition={dispatch({ type: "isEditing", id: data.id })}
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
                onClick={() => dispatch({ type: "isEditing", id: data.id })}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                aria-label="delete"
                onClick={() => dispatch({ type: "delete", id: data.id })}
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
});

// export default TodoItem;
