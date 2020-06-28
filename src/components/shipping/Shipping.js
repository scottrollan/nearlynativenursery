import React, { useState } from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import FedExMap from '../../media/fedExMap.png';
import styles from './Shipping.module.scss';

const Shipping = () => {
  const [showExample, setShowExample] = useState(false);

  return (
    <div id="shipping" className={styles.shipping}>
      <h3 style={{ textDecoration: 'underline' }}>
        Shipping Charges and Zone Fuel Surcharge
      </h3>
      <h6>
        Due to substantial increases in shipping costs, we find it necessary to
        pass on the fuel surcharges that have been levied on us.
      </h6>
      <h6>
        Because of increased shipping costs, any plant, or combination of
        plants, that will not fit into a 48" box will automatically incur an
        additional $11.00 surcharge to ship FedEx Ground. We are happy to give
        you an estimated shipping rate when we receive your order.
      </h6>
      <img src={FedExMap} alt="" className={styles.mapImg} />
      <Container style={{ margin: '3vh auto' }}>
        <h4 style={{ textDecoration: 'underline' }}>
          Total Shipping &#61; Base Costs &#43; Fuel Surcharge
        </h4>
        <Container
          className={styles.outlined}
          style={{ borderTop: '2px solid var(--normal-font-color)' }}
        >
          <h5 style={{ paddingTop: '5px' }}>
            Base Costs (boxes, packaging &amp; shipping)
          </h5>
          <Row style={{ borderTop: '1px solid var(--normal-font-color)' }}>
            <Col
              className={[
                `${styles.outlined} ${styles.responsiveFont} ${styles.flexCenter}`,
              ]}
            >
              $0.00 to $10.00
            </Col>
            <Col
              className={[
                `${styles.outlined} ${styles.responsiveFont} ${styles.flexCenter}`,
              ]}
            >
              $10.01 to $25.00
            </Col>
            <Col
              className={[
                `${styles.outlined} ${styles.responsiveFont} ${styles.flexCenter}`,
              ]}
            >
              $25.01 to $50.00
            </Col>
            <Col
              className={[
                `${styles.outlined} ${styles.responsiveFont} ${styles.flexCenter}`,
              ]}
            >
              $50.01 to $75.00
            </Col>
            <Col
              className={[
                `${styles.outlined} ${styles.responsiveFont} ${styles.flexCenter}`,
              ]}
            >
              $75.01 to $100.00
            </Col>
            <Col
              className={[
                `${styles.outlined} ${styles.responsiveFont} ${styles.flexCenter}`,
              ]}
            >
              over $100.00
            </Col>
          </Row>
          <Row>
            <Col
              className={[
                `${styles.outlined} ${styles.responsiveFont} ${styles.flexCenter}`,
              ]}
            >
              $15.00
            </Col>
            <Col
              className={[
                `${styles.outlined} ${styles.responsiveFont} ${styles.flexCenter}`,
              ]}
            >
              $17.00
            </Col>
            <Col
              className={[
                `${styles.outlined} ${styles.responsiveFont} ${styles.flexCenter}`,
              ]}
            >
              $19.00
            </Col>
            <Col
              className={[
                `${styles.outlined} ${styles.responsiveFont} ${styles.flexCenter}`,
              ]}
            >
              $21.00
            </Col>
            <Col
              className={[
                `${styles.outlined} ${styles.responsiveFont} ${styles.flexCenter}`,
              ]}
            >
              $23.00
            </Col>
            <Col
              className={[
                `${styles.outlined} ${styles.responsiveFont} ${styles.flexCenter}`,
              ]}
            >
              28%
            </Col>
          </Row>
        </Container>
        <Container
          className={[`${styles.outlined} ${styles.responsiveFont}`]}
          style={{
            borderTop: '2px solid var(--normal-font-color)',
            margin: '3vh 0',
          }}
        >
          <h5 style={{ paddingTop: '5px' }}>Fuel Surcharge Costs</h5>
          <Row style={{ borderTop: '1px solid var(--normal-font-color)' }}>
            <Col
              className={[
                `${styles.outlined} ${styles.responsiveFont} ${styles.flexCenter}`,
              ]}
              style={{ backgroundColor: '#EB357F' }}
            >
              Zone 1
            </Col>
            <Col
              className={[
                `${styles.outlined} ${styles.responsiveFont} ${styles.flexCenter}`,
              ]}
            >
              Base Shipping +{' '}
            </Col>
            <Col
              className={[
                `${styles.outlined} ${styles.responsiveFont} ${styles.flexCenter}`,
              ]}
            >
              0%
            </Col>
          </Row>{' '}
          <Row>
            <Col
              className={[
                `${styles.outlined} ${styles.responsiveFont} ${styles.flexCenter}`,
              ]}
              style={{ backgroundColor: '#73FBFD' }}
            >
              Zone 2
            </Col>
            <Col
              className={[
                `${styles.outlined} ${styles.responsiveFont} ${styles.flexCenter}`,
              ]}
            >
              Base Shipping +{' '}
            </Col>
            <Col
              className={[
                `${styles.outlined} ${styles.responsiveFont} ${styles.flexCenter}`,
              ]}
            >
              10%
            </Col>
          </Row>{' '}
          <Row>
            <Col
              className={[
                `${styles.outlined} ${styles.responsiveFont} ${styles.flexCenter}`,
              ]}
              style={{ backgroundColor: '#EF8633' }}
            >
              Zone 3
            </Col>
            <Col
              className={[
                `${styles.outlined} ${styles.responsiveFont} ${styles.flexCenter}`,
              ]}
            >
              Base Shipping +{' '}
            </Col>
            <Col
              className={[
                `${styles.outlined} ${styles.responsiveFont} ${styles.flexCenter}`,
              ]}
            >
              20%
            </Col>
          </Row>{' '}
          <Row>
            <Col
              className={[
                `${styles.outlined} ${styles.responsiveFont} ${styles.flexCenter}`,
              ]}
              style={{ backgroundColor: '#75F94C' }}
            >
              Zone 4
            </Col>
            <Col
              className={[
                `${styles.outlined} ${styles.responsiveFont} ${styles.flexCenter}`,
              ]}
            >
              Base Shipping +{' '}
            </Col>
            <Col
              className={[
                `${styles.outlined} ${styles.responsiveFont} ${styles.flexCenter}`,
              ]}
            >
              30%
            </Col>
          </Row>{' '}
          <Row>
            <Col
              className={[
                `${styles.outlined} ${styles.responsiveFont} ${styles.flexCenter}`,
              ]}
              style={{ backgroundColor: '#461F86' }}
            >
              Zone 5
            </Col>
            <Col
              className={[
                `${styles.outlined} ${styles.responsiveFont} ${styles.flexCenter}`,
              ]}
            >
              Base Shipping +{' '}
            </Col>
            <Col
              className={[
                `${styles.outlined} ${styles.responsiveFont} ${styles.flexCenter}`,
              ]}
            >
              40%
            </Col>
          </Row>{' '}
          <Row>
            <Col
              className={[
                `${styles.outlined} ${styles.responsiveFont} ${styles.flexCenter}`,
              ]}
              style={{ backgroundColor: '#0023F5' }}
            >
              Zone 6
            </Col>
            <Col
              className={[
                `${styles.outlined} ${styles.responsiveFont} ${styles.flexCenter}`,
              ]}
            >
              Base Shipping +{' '}
            </Col>
            <Col
              className={[
                `${styles.outlined} ${styles.responsiveFont} ${styles.flexCenter}`,
              ]}
            >
              50%
            </Col>
          </Row>
        </Container>
      </Container>
      <Button
        className={styles.showExample}
        onClick={() => setShowExample(true)}
        style={{ display: showExample ? 'none' : 'initial' }}
      >
        See Cost Example
      </Button>
      <Container
        className={styles.outlined}
        style={{
          borderTop: '2px solid var(--normal-font-color)',
          margin: '3vh 5%',
          width: '90%',
          padding: '1vw',
          display: showExample ? 'inline-block' : 'none',
        }}
      >
        <h5
          style={{
            textDecoration: 'underline',
          }}
        >
          Shipping Cost Example:
        </h5>
        <div
          className={[
            `${styles.responsiveFont} ${styles.flexSpaceBetween} ${styles.math}`,
          ]}
        >
          <span className={styles.responsiveFont}>Merchandise: </span>
          <span className={styles.responsiveFont}>$37.00</span>
        </div>
        <div
          className={[
            `${styles.responsiveFont} ${styles.flexSpaceBetween} ${styles.math}`,
          ]}
        >
          <span className={styles.responsiveFont}>Base shipping cost: </span>
          <span className={styles.responsiveFont}>$19.00</span>
        </div>
        <div
          className={[
            `${styles.responsiveFont} ${styles.flexSpaceBetween} ${styles.math}`,
          ]}
        >
          <span className={styles.responsiveFont}>
            Surcharge delivery to Zone 3 &nbsp;($19 * 20%):{' '}
          </span>
          <span
            className={styles.responsiveFont}
            style={{ borderBottom: '1px solid var(--normal-font-color)' }}
          >
            $3.80
          </span>
        </div>
        <div
          className={[
            `${styles.responsiveFont} ${styles.flexSpaceBetween} ${styles.math}`,
          ]}
        >
          <span className={styles.responsiveFont}>
            Total cost of order including shipping and fuel surcharge ={' '}
          </span>
          <span className={styles.responsiveFont}>$59.80</span>
        </div>
      </Container>
      <Button
        className={styles.showExample}
        onClick={() => setShowExample(false)}
        style={{ display: showExample ? 'inline-block' : 'none' }}
      >
        Close Cost Example
      </Button>
    </div>
  );
};

export default Shipping;
