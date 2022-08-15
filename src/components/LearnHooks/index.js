import React, { useState, useEffect } from "react";

const LearnHooks = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const handlerInput = ({target:{value}})=> {
    setStep(Number(value))
  }

  useEffect(()=>{
    const handlerClick = () => {
      setCount((prevCount)=>prevCount+step);
    };
    window.addEventListener('click', handlerClick);
    return ()=>{
      window.removeEventListener('click', handlerClick);
    }
  },[step])
  
  return (
    <div style={{ height: "80vh", backgroundColor: "#eee" }} >
      <p>Count: {count}</p>
      <input type="number" value={step} onChange={handlerInput}/>
    </div>
  );
};

export default LearnHooks;
