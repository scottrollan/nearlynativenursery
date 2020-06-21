import React from 'react';
import PineTree from '../../media/transparent nnn pine tree.gif';
import styles from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div id="spinner" className={styles.spinnerDiv}>
      <img src={PineTree} alt="" />
    </div>
  );
};

export default Spinner;
