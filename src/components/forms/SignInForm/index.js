import React, { Component } from "react";
import styles from "./SignInForm.module.css";

const initialValues = { email: "", password: "" };

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialValues };
  }

  handlerForm = (event) => {
    event.preventDefault();
    this.setState({ ...initialValues });
  };

  handlerInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handlerForm}>
        <input
          name="email"
          onChange={this.handlerInput}
          value={email}
          className={styles.input}
          placeholder="email"
          type="email"
        />
        <input
          name="password"
          onChange={this.handlerInput}
          value={password}
          className={styles.input}
          placeholder="password"
          type="password"
        />
        <input className={styles.input} type="submit" value="Send" />
      </form>
    );
  }
}

export default SignInForm;
