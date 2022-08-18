import React from "react";
import FuncPhonesList from "../components/FuncPhoneList";
import FuncUsersList from "../components/FuncUsersList";
import UserProfile from "../components/UserProfile";

const HomePage = () => {
  return (
    <>
      <h1>HOME</h1>
      <FuncUsersList />
      <FuncPhonesList />
      <UserProfile />
    </>
  );
};

export default HomePage;
