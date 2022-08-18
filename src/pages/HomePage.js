import React from "react";
import FuncPhonesList from "../components/FuncPhoneList";
import FuncUsersList from "../components/FuncUsersList";

const HomePage = () => {
  return (
    <>
      <h1>HOME</h1>
      <FuncUsersList />
      <FuncPhonesList />
    </>
  );
};

export default HomePage;
