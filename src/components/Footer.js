import React from 'react';
// import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <React.Fragment>
      <div className={styles.footer}>
        <a
          href="https://www.google.com/maps/place/Nearly+Native+Nursery/@33.3820212,-84.4739524,15z/data=!4m5!3m4!1s0x0:0xf3eaee697edb71e1!8m2!3d33.3820212!4d-84.4739524"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>776 McBride Rd | Fayetteville, GA | 30215</p>
        </a>
        <div className={styles.followUs}>
          <i className="facebook icon"></i>
          <i className="instagram icon"></i>
          <i className="twitter square icon"></i>
        </div>
        <div>
          <i
            className="copyright outline icon"
            style={{ diplay: 'inline' }}
          ></i>
          <span className={styles.copyright}>
            {' '}
            copyright Nearly Native Nursery | All Rights Reserved | 2020
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
