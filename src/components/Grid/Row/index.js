import React from 'react';
import styles from '../Grid.module.scss';

const Row = (props) => {
  const {children} = props;
  return (
    <div className={styles.row}>
      {children}
    </div>
  );
}

export default Row;
