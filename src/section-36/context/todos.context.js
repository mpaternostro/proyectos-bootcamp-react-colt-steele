import React, { createContext } from "react";
import todoReducer from "../reducers/todo.reducer";
import useLocalStorageReducer from "../hooks/useLocalStorageReducer";

const TodosContext = createContext();
const DispatchContext = createContext();

function TodosProvider(props) {
  const [state, dispatch] = useLocalStorageReducer(todoReducer, "todos", {
    todos: [],
    counter: 1,
  });

  return (
    <TodosContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}

export { TodosContext, DispatchContext, TodosProvider };
