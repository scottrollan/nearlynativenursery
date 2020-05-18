import React from 'react';
import { Container, Form, Button, Col } from 'react-bootstrap';
import styles from './Contact.module.scss';
import pic from '../../media/N3nameTransparentWithMan2.png';

const Contact = () => {
  return (
    <Container>
      <div className={styles.contactGrid}>
        <div className={styles.form}>
          <Form
            name="contact"
            method="post"
            style={{
              width: '100%',
              padding: '0 calc(50% - 320px',
            }}
            action="/"
          >
            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <input type="hidden" name="form-name" value="contact" />

                <label>
                  Name
                  <input
                    type="text"
                    placeholder="Enter name"
                    name="name"
                    required
                  />
                </label>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <label>
                  Email
                  <input
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    required
                  />
                </label>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group controlId="Textarea" style={{ width: '100%' }}>
                <label>
                  Message
                  <textarea
                    rows="5"
                    name="message"
                    type="textarea"
                    placeholder="Your message..."
                    required
                  />
                </label>
              </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit">
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
