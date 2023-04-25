
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);

  return (
    <div>
      <button style={{ backgroundColor: "transparent", border: "none" }}  
        onClick={increment}>{count}</button>
    </div>
  );
};

export default Counter;