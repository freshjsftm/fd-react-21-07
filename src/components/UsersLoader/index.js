import React, { Component } from "react";
import { getRandomUsers } from "../../api";
import config from "../../configs";
import ControlPanel from "./ControlPanel";
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

  setNat = (newNat) => {this.setState({currentNat: newNat})}
  render() {
    const { users, isError, isFetching, currentNat, currentPage} = this.state;
    return (
      <section className={styles.users_container}>
        <h2>Users List</h2>
        {config.DEFAULT_AMOUNTS.map(this.showRadio)}
        <ControlPanel controlPage={{currentPage, prevPage:this.prevPage, nextPage: this.nextPage}} controlNat={{currentNat, setNat:this.setNat}}/>
        <ListLoader users={users} isError={isError} isFetching={isFetching}/>
      </section>
    );
  }
}

export default UsersLoader;
