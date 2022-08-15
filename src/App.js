import React, {useState} from "react";
import LearnHooks from "./components/LearnHooks";

const App = () => {
  const [isVisible, setIsVisible] = useState(true);
  const handlerSwitch = ()=>{setIsVisible(!isVisible)}
  return <>
  <button onClick={handlerSwitch}>switch isVisible</button>
    {isVisible && <LearnHooks />}
  </>;
};
export default App;
