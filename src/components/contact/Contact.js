import React from 'react';
import { Container, Form, Button, Col } from 'react-bootstrap';
import AlertMessageSent from '../popup/AlertMessageSent';
import $ from 'jquery';
import styles from './Contact.module.scss';
import pic from '../../media/N3nameTransparentWithMan2.png';

const Contact = () => {
  const messageSent = () => {
    $('#alertMessageSent').css('display', 'flex');
    $('#alertMessageSent').delay(1500).fadeOut(1000);
  };

  return (
    <Container id="contact">
      <AlertMessageSent />
      <h4>Contact Us</h4>
      <div className={styles.contactGrid}>
        <div className={styles.form}>
          <Form
            name="contact"
            method="post"
            style={{
              width: '100%',
              padding: '0 calc(50% - 320px',
            }}
            // action="/"
          >
            <input type="hidden" name="form-name" value="contact" />
            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  required
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group controlId="Textarea" style={{ width: '100%' }}>
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="5"
                  name="message"
                  type="textarea"
                  placeholder="Your message..."
                  required
                />
              </Form.Group>
            </Form.Row>

            <Button
              className={styles.contactButton}
              type="submit"
              onClick={messageSent}
            >
              Submit
            </Button>
          </Form>
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
