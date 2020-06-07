import React from 'react';
// import { Icon } from 'semantic-ui-react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <React.Fragment>
      <div className={styles.footer} id="footerxs">
        <a
          href="https://www.google.com/maps/place/Nearly+Native+Nursery/@33.3820212,-84.4739524,15z/data=!4m5!3m4!1s0x0:0xf3eaee697edb71e1!8m2!3d33.3820212!4d-84.4739524"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.address}
        >
          <p>776 McBride Rd | Fayetteville, GA | 30215</p>
        </a>
        <div className={styles.followUs}>
          <a
            href="https://www.facebook.com/NearlyNativeNursery/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--nnn-orange)' }}
          >
            <i className="fab fa-facebook-square clickable"></i>
          </a>
          <a
            href="https://www.instagram.com/nearlynativenursery/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--nnn-orange)' }}
          >
            <i className="fab fa-instagram-square  clickable"></i>
          </a>
          <a
            href="https://twitter.com/nnativenursery"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--nnn-orange)' }}
          >
            <i className="fab fa-twitter-square  clickable"></i>
          </a>
        </div>
        <div className={styles.copyright}>
          <i className="far fa-copyright" style={{ diplay: 'inline' }}></i>
          <span>
            {' '}
            copyright Nearly Native Nursery | All Rights Reserved | 2020
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
