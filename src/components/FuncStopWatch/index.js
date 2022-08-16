import React, { useState, useEffect } from "react";
import {format, addMilliseconds} from 'date-fns';

const FuncStopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handlerBtn = () => {setIsRunning(!isRunning);};

  useEffect(() => {
    if (isRunning) {
      const idInterval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
      return ()=>{
        clearInterval(idInterval)
      }
    }
  }, [isRunning]);

  return (
    <div>
      <h2>Time: {time}</h2>
      <button onClick={handlerBtn}>{isRunning ? "stop" : "start"}</button>
    </div>
  );
};

export default FuncStopWatch;
