import React from "react";
import Ciao from "./components/Ciao";
import "./App.css";

function App() {
  const user = {
    id:1,
    firstName: 'Elon',
    lastName: 'Musk'
  }
  return (
    <>
      <h1 className="heading" title="react" >
        Hi!
      </h1>
      <Ciao fname="Alex" sname="Qwerty" className='ciao'/>
      <Ciao fname="Masha" sname="Bob" />
      <Ciao fname={user.firstName} sname={user.lastName} />
    </>
  );
}

export default App;
