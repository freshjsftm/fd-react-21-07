import React, { Component } from "react";
import { getRandomUsers } from "../../api";
import config from "../../configs";
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
      currentAmount: config.DEFAULT_AMOUNT,
    };
  }

  load = () => {
    const { currentPage, currentAmount } = this.state;
    this.setState({ isFetching: true });
    getRandomUsers({ page: currentPage, results: currentAmount })
      .then((data) => {
        if (data.error) {
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
    const { currentPage, currentAmount } = this.state;
    if (currentPage !== prevState.currentPage ||currentAmount!==prevState.currentAmount ) {
      this.load();
    }
  }

  showUser = ({
    email,
    login: { uuid },
    name: { first, last },
    nat,
    gender,
  }) => (
    <li key={uuid} className={styles.user_container}>
      <h3>
        {first} {last} ({nat})
      </h3>
      <p>{gender}</p>
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
  handlerAmount = ({ target: { value } }) => {
    this.setState({ currentAmount: Number(value) });
  };
  render() {
    const { users, isError, isFetching, currentPage, currentAmount } =
      this.state;
    return (
      <section className={styles.users_container}>
        <h2>Users List</h2>
        <div>
          <button onClick={this.prevPage}>&lt;</button>
          <span> {currentPage} </span>
          <button onClick={this.nextPage}>&gt;</button>
          <label>
            <input
              onChange={this.handlerAmount}
              type="radio"
              name="amount"
              value={5}
              checked={currentAmount === 5}
            />
            5
          </label>
          <label>
            <input
              onChange={this.handlerAmount}
              type="radio"
              name="amount"
              value={10}
              checked={currentAmount === 10}
            />
            10
          </label>
          <label>
            <input
              onChange={this.handlerAmount}
              type="radio"
              name="amount"
              value={15}
              checked={currentAmount === 15}
            />
            15
          </label>
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
