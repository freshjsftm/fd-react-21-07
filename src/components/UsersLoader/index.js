import React, { Component } from "react";
import styles from './UsersLoader.module.scss';

class UsersLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isError: false,
      isFetching: false,
      count:0
    };
  }

  componentDidMount() {
    this.setState({ isFetching: true });
    fetch("https://randomuser.me/api/?page=1&results=3&seed=fd20221&nat=gb")
      .then((response) => response.json())
      .then((data) => this.setState({ users: data.results }))
      .catch((error) => this.setState({ isError: true }))
      .finally(() => this.setState({ isFetching: false }))
  }

  showUser = ({ email, login: { uuid }, name: { first, last }, nat }) => (
    <li key={uuid} className={styles.user_container}>
      <h3>{first} {last} ({nat})</h3>
      <p>{email} </p>
    </li>
  );
  render() {
    const { users, isError, isFetching } = this.state;
    if (isError) {
      return <div>Error!!!</div>;
    }
    if (isFetching) {
      return <div>Loading...</div>;
    }
    return (
      <section>
        <h2 className={styles.users_heading}>Users List</h2>
        <ol>{users.map(this.showUser)}</ol>
      </section>
    );
  }
}

export default UsersLoader;
