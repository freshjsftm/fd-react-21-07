import React, {useState} from "react";
import FuncStopWatch from "./components/FuncStopWatch";

const App = () => {
  const [isVisible, setIsVisible] = useState(true);
  const handlerSwitch = ()=>{setIsVisible(!isVisible)}
  return <>
  <button onClick={handlerSwitch}>switch isVisible</button>
    {isVisible && <FuncStopWatch />}
  </>;
};
export default App;
