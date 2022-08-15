import React, { useState } from "react";

const LearnHooks = () => {
  const [coord, setCoord] = useState({ x: 0, y: 0 , z: 0});
  const [count, setCount] = useState(0);
  const handlerMove = (event) => {
    setCoord({
      ...coord,
      x: event.clientX,
      y: event.clientY,
    });
  };
  const handlerClick = () => {
    setCount((prevCount)=>prevCount+1);
  };
  return (
    <div
      style={{ height: "80vh", backgroundColor: "#eee" }}
      onMouseMove={handlerMove}
      onClick={handlerClick}
    >
      <p>X: {coord.x}</p>
      <p>Y: {coord.y}</p>
      <p>Z: {coord.z}</p>
      <p>Count: {count}</p>
    </div>
  );
};

export default LearnHooks;
