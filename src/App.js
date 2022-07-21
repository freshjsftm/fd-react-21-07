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
      <Ciao fname="Alex" sname="Qwerty" />
      <Ciao fname="Masha" sname="Bob" isHi/>
      <Ciao fname={user.firstName} sname={user.lastName} isHi/>
    </>
  );
}

export default App;
