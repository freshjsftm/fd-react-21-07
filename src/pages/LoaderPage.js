import React from "react";
import DataLoader from "../components/DataLoader";

const LoaderPage = () => {
  const loadNames = () => {
    return fetch("/users.json").then((res) => res.json());
  };
  const loadPhones = () => {
    return fetch("/phones.json").then((res) => res.json());
  };
  const renderNames = (state) => {
    return (
      <ul>
        {state.data.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    );
  };
  const renderPhones = (state) => {
    return (
      <ul>
        {state.data.map(({ id, name, price }) => (
          <li key={id}>
            {name} price:{price}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <DataLoader getData={loadNames} render={renderNames} />
      <DataLoader getData={loadPhones} render={renderPhones} />
    </div>
  );
};

export default LoaderPage;
