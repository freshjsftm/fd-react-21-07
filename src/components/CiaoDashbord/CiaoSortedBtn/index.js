import React from "react";
import PropTypes from "prop-types";

const CiaoSortedBtn = (props) => {
  const { isUpSort, sortBy, context } = props;
  return (
    <button onClick={sortBy}>
      sort by {context} {isUpSort ? "DN" : "UP"}
    </button>
  );
};

CiaoSortedBtn.defaultProps = {
  isUpSort: false,
  sortBy:()=>{},
  context:'test string',
}

CiaoSortedBtn.propTypes = {
  isUpSort: PropTypes.bool,
  sortBy:PropTypes.func,
  context:PropTypes.string,
};

export default CiaoSortedBtn;
