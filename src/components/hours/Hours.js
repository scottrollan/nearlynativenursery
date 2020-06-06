import React from 'react';
// import { Icon } from 'semantic-ui-react';
import { Container } from 'react-bootstrap';
import name from '../../media/N3nameTransparent.png';
import styles from './Hours.module.scss';

const Hours = () => {
  return (
    <div className={styles.parallaxHome} id="hours">
      <Container>
        <img src={name} alt="" style={{ width: '80%' }} />
        <h4>is open from 9AM to 6PM</h4>
        <h4>Wednesday - Saturday</h4>
        <h6>closed Sunday, Monday and Tuesday</h6>
        <a
          href="https://www.google.com/maps/place/Nearly+Native+Nursery/@33.3820212,-84.4739524,15z/data=!4m5!3m4!1s0x0:0xf3eaee697edb71e1!8m2!3d33.3820212!4d-84.4739524"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <p className={styles.mapLink}>
            <i className="fas fa-map-marker-alt" />
            &nbsp;&nbsp; See us on the map...
          </p>
        </a>
      </Container>
    </div>
  );
};

export default Hours;
