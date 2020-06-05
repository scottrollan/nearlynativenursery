import React from 'react';
import { Container } from 'react-bootstrap';
import AlertMessageSent from '../popup/AlertMessageSent';
import styles from './Contact.module.scss';
import pic from '../../media/N3nameTransparentWithMan2.png';

import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <Container id="contact">
      <AlertMessageSent />
      <h4>Contact Us</h4>
      <div className={styles.contactGrid}>
        <div className={styles.form}>
          <ContactForm />

          <hr className={styles.hr} />
        </div>
        <div className={styles.pic}>
          <img src={pic} alt="" style={{ width: '100%' }} />
        </div>
        <div className={styles.address}>
          <h4>Nearly Native Nursery</h4>
          <p>776 McBride Rd</p>
          <p>Fayetteville, GA 30215</p>
          <p>Tel: 770-460-6284</p>
          <p>Fax: 770-460-7050</p>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
