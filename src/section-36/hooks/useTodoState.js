import useLocalStorageState from "./useLocalStorageState";
import { useReducer, useEffect } from "react";
import todoReducer from "../reducers/todo.reducer";

function useTodoState(initialVal = []) {
  const [todos, setTodos] = useLocalStorageState("todos", initialVal);
  const [idCounter, setIdCounter] = useLocalStorageState("counter", 1);
  const [state, dispatch] = useReducer(todoReducer, {
    todos: [],
    counter: 1,
  });

  // useEffect(() => {
  //   setTodos(state.todos);
  //   setIdCounter(state.counter);
  // });

  // const toggleCompleted = (todoId) => {
  //   const newTodos = todos.map((todo) =>
  //     todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
  //   );
  //   setTodos(newTodos);
  // };

  // const addTodo = (task) => {
  //   const newTodo = {
  //     id: idCounter,
  //     task,
  //     completed: false,
  //     isEditing: false,
  //   };
  //   setIdCounter(idCounter + 1);
  //   setTodos([...todos, newTodo]);
  // };

  // const deleteTodo = (todoId) => {
  //   const newTodos = todos.filter((todo) => todo.id !== todoId);
  //   setTodos(newTodos);
  // };

  // const editTodo = (todoId, newTask) => {
  //   const newTodos = todos.map((todo) =>
  //     todo.id === todoId ? { ...todo, task: newTask, isEditing: false } : todo
  //   );
  //   setTodos(newTodos);
  // };

  // const toggleEdition = (todoId) => {
  //   const newTodos = todos.map((todo) =>
  //     todo.id === todoId ? { ...todo, isEditing: !todo.isEditing } : todo
  //   );
  //   setTodos(newTodos);
  // };

  // return {
  //   todos,
  //   toggleCompleted,
  //   addTodo,
  //   deleteTodo,
  //   editTodo,
  //   toggleEdition,
  // };

  return [state, dispatch];
}

export default useTodoState;
