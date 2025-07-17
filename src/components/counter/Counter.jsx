import React, { useState } from "react";

const Counter = () => {
  const [increment, setIncrement] = useState(0);
  const hanldeIncrement = () => {
    setTimeout(() => {
      setIncrement((increment) => increment + 1);
    }, 2000);
  };
  return <div onClick={hanldeIncrement}>Increment {increment}</div>;
};

export default Counter;
