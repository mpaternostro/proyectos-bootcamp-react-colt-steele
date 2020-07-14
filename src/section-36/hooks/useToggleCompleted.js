import React, { useState } from "react";

function useToggleCompleted(initialVal) {
  const [toggle, setToggle] = useState(initialVal);

  setToggle(!toggle.completed);
  return toggle;
}

export default useToggleCompleted;
