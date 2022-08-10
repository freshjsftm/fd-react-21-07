import React from "react";
import LogInForm from "./components/forms/LogInForm";

const App = () => {
  const onSubmit = (values, formikBag) => {
    formikBag.resetForm();
  };
  return <>
    <LogInForm onSubmit={onSubmit}/>
  </>;
};

export default App;
