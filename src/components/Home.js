import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import name from '../media/N3nameTransparent.png';

const Home = () => {
  return (
    <div className={styles.parallaxHome} style={{ padding: '2vh 0' }}>
      <div style={{ paddin: 0 }}>
        <img src={name} alt="" style={{ width: '100%' }} />
        <h3 style={{ margin: '0 0' }}>
          is your key to eye catching landscaping. Come visit our gardens for
          ideas!{' '}
        </h3>
      </div>
      <div>
        <p>
          Proud to be selected as a <h4>Garden Watchdog Top 5</h4> company{' '}
          <span className={styles.blinking}>five years in a row!</span>
        </p>
        <p>
          by Dave's Garden.{' '}
          <a
            className={`clickable ${styles.readMore}`}
            href="https://davesgarden.com/products/gwd/c/759"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more...
          </a>
        </p>
      </div>
      <div>
        <h4>
          Try our smart{' '}
          <Link
            to="/search"
            className="clickable"
            style={{ color: 'var(--nnn-green)' }}
          >
            advanced search
          </Link>{' '}
          to select a plant for specific growing conditions. Hot or dry, sun or
          shade, sand to clay, we can guide you to the right native plant to
          create a special landscape that will flourish.
        </h4>
      </div>
    </div>
  );
};

export default Home;