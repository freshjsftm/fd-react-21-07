import React, { Component } from "react";
import { getRandomUsers } from "../../api";
import config from "../../configs";
import ListLoader from "./ListLoader";
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
      currentNat: config.DEFAULT_NAT,
    };
  }

  load = () => {
    const { currentPage, currentAmount, currentNat } = this.state;
    this.setState({ isFetching: true });
    getRandomUsers({
      page: currentPage,
      results: currentAmount,
      nat: currentNat,
    })
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
    const { currentPage, currentAmount, currentNat } = this.state;
    const isUpdate = currentPage !== prevState.currentPage ||
      currentAmount !== prevState.currentAmount ||
      currentNat !== prevState.currentNat;
    if (isUpdate) {
      this.load();
    }
  }


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
  showRadio = (n) => {
    const { currentAmount } = this.state;
    return (
      <label key={n}>
        <input
          onChange={this.handlerAmount}
          type="radio"
          name="amount"
          value={n}
          checked={currentAmount === n}
        />{" "}
        {n}{" "}
      </label>
    );
  };
  showOption = (nat) => (<option key={nat} value={nat}>{nat}</option>)
  handlerNat = ({ target: { value } }) => {this.setState({currentNat: value})}
  render() {
    const { users, isError, isFetching, currentPage, currentNat } = this.state;
    return (
      <section className={styles.users_container}>
        <h2>Users List</h2>
        <div>
          <select onChange={this.handlerNat} value={currentNat}>
            {config.DEFAULT_NATS.map(this.showOption)}
          </select>
          <button onClick={this.prevPage}>&lt;</button>
          <span> {currentPage} </span>
          <button onClick={this.nextPage}>&gt;</button>
          {config.DEFAULT_AMOUNTS.map(this.showRadio)}
        </div>
        <ListLoader users={users} isError={isError} isFetching={isFetching}/>
      </section>
    );
  }
}

export default UsersLoader;
