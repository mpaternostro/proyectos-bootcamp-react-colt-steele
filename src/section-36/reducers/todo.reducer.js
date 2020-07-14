function todoReducer(state, action) {
  switch (action.type) {
    case "isCompleted":
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
        counter: state.counter,
      };
    case "add":
      const newTodo = {
        id: state.counter,
        task: action.task,
        completed: false,
        isEditing: false,
      };
      return { todos: [...state.todos, newTodo], counter: state.counter + 1 };
    case "delete":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.id),
        counter: state.counter,
      };
    case "edit":
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.id
            ? { ...todo, task: action.task, isEditing: false }
            : todo
        ),
        counter: state.counter,
      };
    case "isEditing":
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, isEditing: !todo.isEditing } : todo
        ),
        counter: state.counter,
      };
    default:
      return state;
  }
}

export default todoReducer;
