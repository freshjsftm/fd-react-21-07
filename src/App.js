import React from "react";
import "./App.css";
import Ciao from "./components/CiaoDashbord/Ciao";
import UserCard from "./components/UserCard";
import UsersList from "./components/UsersList";

const App = () => {
  const user = {
    id:1,
    fname:'Elon',
    lname:'Musk',
    isSelected: false
  }
  const user2 = {
    id:2,
    fname:'Elon2',
    lname:'Musk2',
    isSelected: false
  }
  return (
    <>
      <UserCard user={user} setIsSelected={()=>{}}/>
      <hr/>
      <UsersList users={[user,user2]}/>
      <Ciao />
    </>
  );
};

export default App;
