import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

import styles from './ScrollTop.module.scss';

const ScrollTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <Button
      onClick={scrollTop}
      className={styles.scrollTop}
      variant="greenButton"
      style={{
        display: showScroll ? 'flex' : 'none',
      }}
    >
      <i className="fas fa-angle-up"></i> Top
    </Button>
  );
};

export default ScrollTop;
