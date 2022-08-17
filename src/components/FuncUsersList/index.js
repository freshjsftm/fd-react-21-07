import React from "react";
import Spinner from "../Spinner";
import Error from "../Error";
import {useData} from "../../hooks";
import { loadNames } from "../../api";

const FuncUsersList = () => {
  const {data, error, isFetching} = useData(loadNames);
  if (isFetching) {
    return <Spinner />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <ol>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ol>
  );
};

export default FuncUsersList;
