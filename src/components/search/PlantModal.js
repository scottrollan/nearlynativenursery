import React from 'react';
import { Image, Container, Row, Col, Button } from 'react-bootstrap';
import styles from './PlantModal.module.scss';

const PlantModal = (props) => {
  const hideModal = (thisModal) => {
    document.getElementById(thisModal).style.display = 'none';
    document.querySelector('html').style.overflowY = 'auto';
  };
  window.location = '#';

  return (
    <div id={props.id} className={[`${styles.modal}`]}>
      <div className={styles.overlay} onClick={() => hideModal(props.id)}></div>
      <div
        className={[
          `${styles.modalBody} ${styles.disableScrollbar} ${styles.fadeIn}`,
        ]}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modalHeader}>
          <h3>{props.commonName}</h3>
          <h5>
            {props.botanicalName} {props.variety}
          </h5>
        </div>
        <div className={styles.imageWrapper}>
          {props.hasUniqueImage ? (
            <a href={props.imageUrl} target="_blank" rel="noopener noreferrer">
              <Image src={props.imageUrl} alt="" style={{ width: '100%' }} />
            </a>
          ) : (
            <Button
              secondary="true"
              onClick={() =>
                window.open(
                  `http://www.google.com/search?q=${props.botanicalName} ${props.variety}&tbm=isch`,
                  '_blank'
                )
              }
              rel="noopener noreferrer"
              style={{ width: 'calc(100%-2rem)', margin: '1rem' }}
            >
              Search Google Images for {props.commonName}
            </Button>
          )}
        </div>

        <p className={styles.modalDescr}>{props.description}</p>
        <Container>
          <Row className={'show-grid'}>
            <Col className={styles.col} xs={6} md={4}>
              <div className={styles.condHeader}>Soil Type</div>
              {props.soilType.map((soil) => (
                <div className={styles.condListItem}>- {soil}</div>
              ))}
            </Col>
            <Col className={styles.col} xs={6} md={4}>
              Soil Ph
            </Col>
            <Col className={styles.col} xs={6} md={4}>
              Water Level
            </Col>
            <Col className={styles.col} xs={6} md={4}>
              Sun Exposure
            </Col>
            <Col className={styles.col} xs={6} md={4}>
              Foliage
            </Col>
            <Col className={styles.col} xs={6} md={4}>
              Container Size
            </Col>
            <Col className={styles.col} xs={6} md={4}>
              Price
            </Col>
          </Row>
        </Container>
        <div className={styles.modalFooter}>
          <Button onClick={() => hideModal(props.id)}>close</Button>
        </div>
      </div>
    </div>
  );
};

export default PlantModal;
