import React, {useState} from 'react';

const LearnHooks = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(10);
  const handlerClick = ()=>{
    setCount(count+step);
  }
  const handlerInput = ({target:{value}})=>{
    setStep(Number(value));
  }
  console.log('render')
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handlerClick}>add</button>
      <input type="number" value={step} onChange={handlerInput}/>
    </div>
  );
}

export default LearnHooks;
