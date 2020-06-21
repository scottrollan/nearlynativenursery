import React from 'react';
import { Image, Container, Row, Col, Button } from 'react-bootstrap';
import styles from './PlantModal.module.scss';

const PlantModal = (props) => {
  const hideModal = (thisModal) => {
    document.getElementById(thisModal).style.display = 'none';
    document.querySelector('html').style.overflowY = 'auto';
  };

  const googleSearch = (botanicalName, variety) => {
    if (variety !== undefined) {
      window.open(
        `http://www.google.com/search?q=${botanicalName} ${variety}&tbm=isch`,
        '_blank'
      );
    } else {
      window.open(
        `http://www.google.com/search?q=${botanicalName}&tbm=isch`,
        '_blank'
      );
    }
  };

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
          <h3 style={{ alignSelf: 'center' }}>{props.commonName}</h3>

          <h5>
            {props.botanicalName} {props.variety}
          </h5>
          <h6
            style={{
              display:
                props.regionalName === undefined || props.regionalName === ''
                  ? 'none'
                  : 'inherit',
            }}
          >
            Regionally known as <i>{props.regionalName}</i>
          </h6>
        </div>
        <div className={styles.imageWrapper}>
          {props.hasUniqueImage ? (
            <a href={props.imageUrl} target="_blank" rel="noopener noreferrer">
              <Image src={props.imageUrl} alt="" style={{ width: '100%' }} />
            </a>
          ) : (
            <Button
              onClick={() => googleSearch(props.botanicalName, props.variety)}
              rel="noopener noreferrer"
              className={styles.searchGoogleButton}
              style={{
                width: 'calc(100%-2rem)',
                margin: '1rem',
              }}
            >
              Search Google Images for {props.commonName}
            </Button>
          )}
        </div>

        <p className={styles.modalDescr}>
          {props.description} Thrives from zone {props.lowZone} to zone{' '}
          {props.highZone}.
        </p>
        <p
          style={{
            display:
              props.notes === undefined || props.notes === ''
                ? 'none'
                : 'inherit',
          }}
        >
          Note: {props.notes}
        </p>
        <Container>
          <Row className={'show-grid'}>
            <Col className={styles.col} xs={6} md={4}>
              <div className={styles.condHeader}>Soil Type</div>
              {props.soilType.map((soil) => (
                <div className={styles.condListItem} key={soil}>
                  {soil}
                </div>
              ))}
            </Col>
            <Col className={styles.col} xs={6} md={4}>
              <div className={styles.condHeader}>Soil pH</div>
              {props.pH.map((pH) => (
                <div className={styles.condListItem} key={pH}>
                  {pH}
                </div>
              ))}
            </Col>
            <Col className={styles.col} xs={6} md={4}>
              <div className={styles.condHeader}>Water Level</div>
              {props.water.map((w) => (
                <div className={styles.condListItem} key={w}>
                  {w}
                </div>
              ))}
            </Col>
            <Col className={styles.col} xs={6} md={4}>
              <div className={styles.condHeader}>Sun Exposure</div>
              {props.sunLevel.map((sun) => (
                <div className={styles.condListItem} key={sun}>
                  {sun}
                </div>
              ))}
            </Col>
            <Col className={styles.col} xs={6} md={4}>
              <div className={styles.condHeader}>Foliage</div>
              {props.foliage.map((f) => (
                <div className={styles.condListItem} key={f}>
                  {f}
                </div>
              ))}
            </Col>
            <Col className={styles.col} xs={6} md={4}>
              <div className={styles.condHeader}>Unit Size/Price</div>
              {props.unit.map((u) => (
                <div
                  className={[`${styles.condListItem} ${styles.unitDiv}`]}
                  key={u.containerSize}
                >
                  <span>{u.containerSize} </span>

                  {u.price !== undefined && u.price !== 0 ? (
                    <span> ${u.price.toFixed(2)}</span>
                  ) : null}
                </div>
              ))}
            </Col>
          </Row>
          <p
            style={{
              display:
                props.purchaseNote === undefined || props.purchaseNotes === ''
                  ? 'none'
                  : 'inherit',
            }}
          >
            {props.purchaseNotes}
          </p>
        </Container>
        <div className={styles.modalFooter}>
          <Button
            className={styles.closeButton}
            onClick={() => hideModal(props.id)}
          >
            close
          </Button>
        </div>
        <span
          className={styles.closeX}
          onClick={() => hideModal(props.id)}
        ></span>
      </div>
    </div>
  );
};

export default PlantModal;
