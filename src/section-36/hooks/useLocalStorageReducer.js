import { useReducer, useEffect } from "react";

function useLocalStorageReducer(reducer, key, defaultValue) {
  const [state, dispatch] = useReducer(
    reducer,
    defaultValue,
    () => JSON.parse(localStorage.getItem(key)) || defaultValue
  );

  useEffect(() => localStorage.setItem(key, JSON.stringify(state)));

  return [state, dispatch];
}

export default useLocalStorageReducer;
