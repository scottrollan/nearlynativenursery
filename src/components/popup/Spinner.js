import React from 'react';
import PineTree from '../../media/transparent nnn pine tree.gif';
import styles from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div id="spinner" className={styles.spinnerDiv}>
      <figure className={styles.fadeIn}>
        <img src={PineTree} alt="" />
        <figcaption style={{ color: 'var(--lightest-gray)' }}>
          ...searching...
        </figcaption>
      </figure>
    </div>
  );
};

export default Spinner;
