import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import styles from './Contact.module.scss';
import AlertMessageSent from '../popup/AlertMessageSent';
import $ from 'jquery';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const encode = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((k) => {
      formData.append(k, data[k]);
    });
    return formData;
  };

  const handleSubmit = (e) => {
    const data = { 'form-name': 'contact', name, email, message };

    fetch('/', {
      method: 'POST',
      // headers: { "Content-Type": 'multipart/form-data; boundary=random' },
      body: encode(data),
    })
      .then(() => {
        setStatus('Form Submission Successful!!');
        $('#alertMessageSent').css('display', 'flex');
        $('#alertMessageSent').delay(1500).fadeOut(1000);
        setName('');
        setEmail('');
        setMessage('');
        $('#contactForm')[0].reset();
      })
      .catch((error) => {
        setStatus('Form Submission Failed!');
        console.log(error);
        alert(status);
      });

    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      return setName(value);
    }
    if (name === 'email') {
      return setEmail(value);
    }
    if (name === 'message') {
      return setMessage(value);
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      action="/thank-you/"
      style={{
        minHeight: '100vh',
        width: '100%',
        padding: '0 calc(50% - 320px',
      }}
      id="contactForm"
    >
      <input type="hidden" name="form-name" value="contact" />
      <AlertMessageSent />
      <h2 style={{ color: 'var(--light-grey)', padding: '2vh 0' }}>
        CONTACT BARRY
      </h2>
      <div className={styles.nameEmailRow}>
        <Form.Control
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Your name"
          required
          className={styles.input}
        />

        <Form.Control
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Your email"
          required
          className={styles.input}
        />
      </div>

      <Form.Control
        as="textarea"
        name="message"
        value={message}
        onChange={handleChange}
        rows="10"
        placeholder="Your message..."
        required
        className={styles.input}
      />
      {/* </Form.Group> */}
      <Button
        variant="secondary"
        className={styles.contactButton}
        type="submit"
      >
        Send
      </Button>
    </Form>
  );
};
export default ContactForm;
