import React from 'react';
import { Container, Button, Form, Input, TextArea } from 'semantic-ui-react';
import styles from './Contact.module.scss';
import pic from '../media/N3nameTransparentWithMan2.png';

const Contact = () => {
  return (
    <Container>
      <div className={styles.contact}>
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
            <Form.Field>
              <input type="hidden" name="form-name" value="contact" />
              <label style={{ fontSize: '1.8vh' }}>
                Name
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  style={{ height: '4.8vh', minHeight: '36px' }}
                />
              </label>
            </Form.Field>
            <Form.Field>
              <label style={{ fontSize: '1.8vh', height: 'auto' }}>
                E-mail
                <Input
                  type="email"
                  name="email"
                  placeholder="me@email.com"
                  required
                  style={{ height: '4.8vh', minHeight: '36px' }}
                />
              </label>
            </Form.Field>
            <Form.Field>
              <label style={{ fontSize: '1.8vh' }}>
                Message
                <TextArea
                  type="textarea"
                  name="message"
                  placeholder="Enter text..."
                  required
                  style={{ height: '20.5vh' }}
                />
              </label>
            </Form.Field>

            <Button type="submit" onClick={() => console.log('message sent')}>
              Submit
            </Button>
          </Form>
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
        <hr className={styles.hr} />
      </div>
    </Container>
  );
};

export default Contact;
