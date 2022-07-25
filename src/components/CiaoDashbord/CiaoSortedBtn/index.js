import React from "react";

const CiaoSortedBtn = (props) => {
  const {isUpSort, sortBy, context} = props;
  return (
    <button onClick={sortBy}>sort by {context} {isUpSort ? "DN" : "UP"}</button>
  );
};

export default CiaoSortedBtn;
