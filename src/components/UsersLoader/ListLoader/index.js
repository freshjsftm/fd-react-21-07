import React from "react";
import { PropTypes } from "prop-types";
import Spinner from "../../Spinner";
import Error from "../../Error";
import styles from "../UsersLoader.module.scss";

const ListLoader = (props) => {
  const { isError, isFetching, users } = props;
  const showUser = ({
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
  return (
    <>
      {isFetching ? (
        <Spinner />
      ) : isError ? (
        <Error />
      ) : (
        <ol>{users.map(showUser)}</ol>
      )}
    </>
  );
};
ListLoader.defaultProps = {
  isError: false,
  isFetching: false,
  users: [],
};
ListLoader.propTypes = {
  isError: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      email: PropTypes.string,
      nat: PropTypes.string,
      gender: PropTypes.string,
      login: PropTypes.object,
      name: PropTypes.object
    })
  ),
};

export default ListLoader;
