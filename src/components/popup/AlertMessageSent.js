import React from 'react';
import styles from './AlertMessageSent.module.scss';

const AlertMessageSent = () => {
  return (
    <div id="alertMessageSent" className={styles.alertDiv}>
      <div className={[`${styles.alertMessageSent} ${styles.fadeIn}`]}>
        <i className="fas fa-undo-alt"></i> Sorry. No plants meet that criteria.
      </div>
    </div>
  );
};

export default AlertMessageSent;
