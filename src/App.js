import React from "react";
import { BrowserRouter } from "react-router-dom";
import LogInForm from "./components/forms/LogInForm";
import HeaderTask from "./components/HeaderTask";

const App = () => {
  const onSubmit = (values, formikBag) => {
    formikBag.resetForm();
  };
  return <BrowserRouter>
    <HeaderTask />
    <LogInForm onSubmit={onSubmit}/>
  </BrowserRouter>;
};

export default App;
