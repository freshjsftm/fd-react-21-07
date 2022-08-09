import React, { Component } from "react";
import { SCHEMA_SIGN_UP } from "./utils/validateSchemas";


const user = {
  fname: 'Elon',
  lname: 'Musk',
  email: 'elon@gmail.com',
  password: 'gr3at@3wdsG',
  age:1,
  remembe: undefined
}

class App extends Component {
  render() {
    SCHEMA_SIGN_UP.validate(user)
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
    return <></>;
  }
}

export default App;
