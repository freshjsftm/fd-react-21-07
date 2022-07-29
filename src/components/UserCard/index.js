import React from "react";
import { PropTypes } from 'prop-types';

const UserCard = (props) => {
  const {
    user: { id, fname, lname, isSelected },
    setIsSelected,
  } = props;
  const styles = { backgroundColor: isSelected ? "teal" : "pink" };
  const handlerBtn = () => setIsSelected(id)
  return (
    <article style={styles} className='container'>
      <h3>
        id={id}) {fname} {lname}
      </h3>
      <button onClick={handlerBtn}>Select this user</button>
    </article>
  );
};

export const userPropTypes = PropTypes.shape({
  id:PropTypes.number.isRequired,
  fname:PropTypes.string.isRequired,
  lname: PropTypes.string.isRequired,
  isSelected: PropTypes.bool
}).isRequired;

UserCard.propTypes = {
  user:userPropTypes,
  setIsSelected:PropTypes.func.isRequired
}

export default UserCard;
