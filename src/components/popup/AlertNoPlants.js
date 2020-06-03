import React from 'react';
import styles from './AlertNoPlants.module.scss';

const AlertNoPlants = () => {
  return (
    <div id="alertNoPlants" className={styles.alertDiv}>
      <div className={[`${styles.alertNoPlants} ${styles.fadeIn}`]}>
        <i className="fas fa-undo-alt"></i> Sorry. No plants meet that criteria.
      </div>
    </div>
  );
};

export default AlertNoPlants;
