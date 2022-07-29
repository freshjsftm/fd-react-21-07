import React from "react";

const CiaoSortedList = (props) => {
  const {isUpSortById, isUpSortByLname, sortById, sortByLname} = props;
  return (
    <div>
      <button onClick={sortById}>
        sort by ID {isUpSortById ? "DN" : "UP"}
      </button>
      <button onClick={sortByLname}>
        sort by last name {isUpSortByLname ? "DN" : "UP"}
      </button>
    </div>
  );
};



export default CiaoSortedList;
