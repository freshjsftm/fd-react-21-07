import React from 'react';
import styles from '../Grid.module.scss';

const Col = (props) => {
  const {colNum, children} = props;
  return (
    <div className={styles[`col-${colNum}`]}>
      {children}
    </div>
  );
}

export default Col;