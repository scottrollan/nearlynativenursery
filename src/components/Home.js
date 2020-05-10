import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.parallaxHome}>
      <div>
        <h3>
          Nearly Native Nursery is your key to eye catching landscaping. Come
          visit our gardens for ideas !{' '}
        </h3>
      </div>
      <div>
        <p>
          Proud to be selected as a Garden Watchdog Top 5 company{' '}
          <span className={styles.blinking}>five years in a row!</span>
        </p>
        <p>
          by Dave's Garden.{' '}
          <a
            className={styles.readMore}
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
          Try our smart <Link to="/search">advanced search</Link> to select a
          plant for specific growing conditions. Hot or dry, sun or shade, sand
          to clay, we can guide you to the right native plant to create a
          special landscape that will flourish.
        </h4>
      </div>
    </div>
  );
};

export default Home;
