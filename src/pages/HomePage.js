import React from "react";
import LogInForm from "../components/forms/LogInForm";
import FuncPhonesList from "../components/FuncPhoneList";
import FuncUsersList from "../components/FuncUsersList";
import UserProfile from "../components/UserProfile";

const HomePage = () => {
  return (
    <>
      <h1>HOME</h1>
      <FuncUsersList />
      <FuncPhonesList />
      <LogInForm />
      <UserProfile />
    </>
  );
};

export default HomePage;
