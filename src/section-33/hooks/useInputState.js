import { useState } from "react";

function useInputState(initialVal) {
  const [value, setValue] = useState(initialVal);

  const handleChange = (evt) => {
    return setValue(evt.target.value);
  };

  const reset = () => {
    return setValue("");
  };

  return [value, handleChange, reset];
}

export default useInputState;
