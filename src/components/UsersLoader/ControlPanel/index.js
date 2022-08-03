import React from "react";
import { PropTypes } from "prop-types";
import config from "../../../configs";

const ControlPanel = (props) => {
  const {controlPage:{currentPage, prevPage, nextPage}, controlNat:{currentNat, setNat}} = props;
  const handlerNat = ({ target: { value } }) => {setNat(value)}
  const showOption = (nat) => (<option key={nat} value={nat}>{nat}</option>)
  return (
    <div>
      <select onChange={handlerNat} value={currentNat}>
        {config.DEFAULT_NATS.map(showOption)}
      </select>
      <button onClick={prevPage}>&lt;</button>
      <span> {currentPage} </span>
      <button onClick={nextPage}>&gt;</button>
      
    </div>
  );
};

ControlPanel.propTypes = {};

export default ControlPanel;
