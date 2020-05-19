import React from 'react';
import { Image, Container, Row, Col, Button } from 'react-bootstrap';

import styles from './SearchResults.module.scss';

const PlantModal = (props) => {
  const hideModal = (whichModal) => {
    document.getElementById(whichModal).style.display = 'none';
    document.querySelector('body').style.overflowY = 'auto';
  };
  return (
    <div id={props.id} className={styles.modal}>
      <div className={styles.overlay} onClick={() => hideModal(props.id)}></div>
      <div className={styles.modalBody} onClick={(e) => e.stopPropagation()}>
        <div>
          <h3>{props.commonName}</h3>
          <h5>
            {props.botanicalName} {props.variety}
          </h5>
          <hr />
        </div>
        <div className={styles.modalImage}>
          {props.hasUniqueImage ? (
            <a href={props.imageUrl} target="_blank" rel="noopener noreferrer">
              <Image src={props.imageUrl} alt="" style={{ width: '100%' }} />
            </a>
          ) : (
            <Button
              secondary
              onClick={() =>
                window.open(
                  `http://www.google.com/search?q=${props.botanicalName} ${props.variety}&tbm=isch`,
                  '_blank'
                )
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              Search Google Images for {props.commonName}
            </Button>
          )}
        </div>

        <div>
          <p className={styles.modalDescr}>{props.description}</p>
          <Container>
            <Row className="show-grid">
              <Col xs={6} md={4}>
                Soil Types
              </Col>
              <Col xs={6} md={4}>
                Soil Ph
              </Col>
              <Col xs={6} md={4}>
                Water Level
              </Col>
              <Col xs={6} md={4}>
                Sun Exposure
              </Col>
              <Col xs={6} md={4}>
                Foliage
              </Col>
              <Col xs={6} md={4}>
                Container Size
              </Col>
              <Col xs={6} md={4}>
                Price
              </Col>
            </Row>
            <Button onClick={() => hideModal(props.id)}>close</Button>
          </Container>
          <div style={{ height: '1rem' }}></div>
        </div>
      </div>
    </div>
  );
};

export default PlantModal;
