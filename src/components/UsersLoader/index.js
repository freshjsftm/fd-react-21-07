import React, { Component } from "react";
import { getRandomUsers } from "../../api";
import Error from "../Error";
import Spinner from "../Spinner";
import styles from "./UsersLoader.module.scss";

class UsersLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isError: false,
      isFetching: false,
      currentPage: 1,
    };
  }

  load = () => {
    const { currentPage } = this.state;
    this.setState({ isFetching: true });
    getRandomUsers({ page: currentPage })
      .then((data) => {
        if(data.error){
          throw new Error();
        }
        this.setState({ users: data.results });
      })
      .catch((error) => this.setState({ isError: true }))
      .finally(() => this.setState({ isFetching: false }));
  };

  componentDidMount() {
    this.load();
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentPage } = this.state;
    if (currentPage !== prevState.currentPage) {
      this.load();
    }
  }

  showUser = ({ email, login: { uuid }, name: { first, last }, nat }) => (
    <li key={uuid} className={styles.user_container}>
      <h3>
        {first} {last} ({nat})
      </h3>
      <p>{email} </p>
    </li>
  );
  prevPage = () => {
    if (this.state.currentPage <= 1) {
      return;
    }
    this.setState((state) => ({ currentPage: state.currentPage - 1 }));
  };
  nextPage = () => {
    this.setState((state) => ({ currentPage: state.currentPage + 1 }));
  };
  render() {
    const { users, isError, isFetching, currentPage } = this.state;
    return (
      <section className={styles.users_container}>
        <h2>Users List</h2>
        <div>
          <button onClick={this.prevPage}>&lt;</button>
          <span> {currentPage} </span>
          <button onClick={this.nextPage}>&gt;</button>
        </div>
        {isFetching ? (
          <Spinner />
        ) : isError ? (
          <Error />
        ) : (
          <ol>{users.map(this.showUser)}</ol>
        )}
      </section>
    );
  }
}

export default UsersLoader;
