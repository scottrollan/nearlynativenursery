import React from 'react';
import styles from './Contact.module.scss';
import pic from '../media/N3nameTransparentWithMan2.png';

const Contact = () => {
  return (
    <div className={`ui container`}>
      <div className={styles.contact}>
        <div className={styles.form}>
          <form
            className="ui form"
            name="contact"
            method="post"
            style={{
              width: '100%',
              padding: '0 calc(50% - 320px',
            }}
            action="/location"
          >
            <div className="field">
              <input type="hidden" name="form-name" value="contact" />
              <label style={{ fontSize: '1.8vh' }}>
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  style={{ height: '4.8vh', minHeight: '36px' }}
                />
              </label>
            </div>
            <div className="field">
              <label style={{ fontSize: '1.8vh', height: 'auto' }}>
                E-mail
                <input
                  type="email"
                  name="email"
                  placeholder="me@email.com"
                  required
                  style={{ height: '4.8vh', minHeight: '36px' }}
                />
              </label>
            </div>
            <div className="field">
              <label style={{ fontSize: '1.8vh' }}>
                Message
                <textarea
                  type="textarea"
                  name="message"
                  placeholder="Enter text..."
                  required
                  style={{ height: '20.5vh' }}
                />
              </label>
            </div>

            <button className="ui button" type="submit">
              Submit
            </button>
          </form>
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
    </div>
  );
};

export default Contact;
