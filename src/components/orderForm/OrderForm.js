import React from 'react';
import PDF from '../../media/InternetMailOrderForm.pdf';
import styles from './OrderForm.module.scss';

const OrederForm = () => (
  <div className={styles.orderFormWrapper}>
    <iframe src={PDF} title="Order Form" className={styles.orderForm}></iframe>
  </div>
);

export default OrederForm;
