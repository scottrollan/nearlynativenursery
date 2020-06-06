import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import FedExMap from '../../media/fedExMap.png';
import styles from './Shipping.module.scss';

const Shipping = () => {
  return (
    <div id="shipping" className={styles.shipping}>
      <h3 style={{ textDecoration: 'underline' }}>
        Shipping Charges and Zone Fuel Surcharge
      </h3>
      <h6>
        Due to substantial increases in shipping costs, we find it necessary to
        pass on the fuel surcharges that have been levied on us
      </h6>
      <h6>
        Because of increased shipping costs, any plant or combination of plants
        that will not fit into a 48" box, will automatically incur an additional
        $11.00 surcharge to ship FedEx Ground. We are happy to give you an
        estimated shipping rate when we receive your order.
      </h6>
      <img src={FedExMap} alt="" className={styles.mapImg} />
      <Container style={{ margin: '3vh 0' }}>
        <h4 style={{ textDecoration: 'underline' }}>
          Total Shipping charges are base Costs plus Fuel Surcharge
        </h4>
        <Container
          className={styles.outlined}
          style={{ borderTop: '2px solid var(--normal-font-color)' }}
        >
          <h5 style={{ paddingTop: '5px' }}>
            Boxes, Packaging &amp; Shipping Base Costs
          </h5>
          <Row style={{ borderTop: '1px solid var(--normal-font-color)' }}>
            <Col className={styles.outlined}>$0.00 to $10.00</Col>
            <Col className={styles.outlined}>$10.01 to $25.00</Col>
            <Col className={styles.outlined}>$25.01 to $50.00</Col>
            <Col className={styles.outlined}>$50.01 to $75.00</Col>
            <Col className={styles.outlined}>$75.01 to $100.00</Col>
            <Col className={styles.outlined}>over $100.00</Col>
          </Row>
          <Row>
            <Col className={styles.outlined}>$15.00</Col>
            <Col className={styles.outlined}>$17.00</Col>
            <Col className={styles.outlined}>$19.00</Col>
            <Col className={styles.outlined}>$21.00</Col>
            <Col className={styles.outlined}>$23.00</Col>
            <Col className={styles.outlined}>28%</Col>
          </Row>
        </Container>
        <Container
          className={styles.outlined}
          style={{
            borderTop: '2px solid var(--normal-font-color)',
            margin: '3vh 0',
          }}
        >
          <h5 style={{ paddingTop: '5px' }}>Fuel Surcharge Costs</h5>
          <Row style={{ borderTop: '1px solid var(--normal-font-color)' }}>
            <Col
              className={styles.outlined}
              style={{ backgroundColor: '#EB357F' }}
            >
              Zone 1
            </Col>
            <Col className={styles.outlined}>Base Shipping + </Col>
            <Col className={styles.outlined}>0%</Col>
          </Row>{' '}
          <Row>
            <Col
              className={styles.outlined}
              style={{ backgroundColor: '#73FBFD' }}
            >
              Zone 2
            </Col>
            <Col className={styles.outlined}>Base Shipping + </Col>
            <Col className={styles.outlined}>10%</Col>
          </Row>{' '}
          <Row>
            <Col
              className={styles.outlined}
              style={{ backgroundColor: '#EF8633' }}
            >
              Zone 3
            </Col>
            <Col className={styles.outlined}>Base Shipping + </Col>
            <Col className={styles.outlined}>20%</Col>
          </Row>{' '}
          <Row>
            <Col
              className={styles.outlined}
              style={{ backgroundColor: '#75F94C' }}
            >
              Zone 4
            </Col>
            <Col className={styles.outlined}>Base Shipping + </Col>
            <Col className={styles.outlined}>30%</Col>
          </Row>{' '}
          <Row>
            <Col
              className={styles.outlined}
              style={{ backgroundColor: '#461F86' }}
            >
              Zone 5
            </Col>
            <Col className={styles.outlined}>Base Shipping + </Col>
            <Col className={styles.outlined}>40%</Col>
          </Row>{' '}
          <Row>
            <Col
              className={styles.outlined}
              style={{ backgroundColor: '#0023F5' }}
            >
              Zone 6
            </Col>
            <Col className={styles.outlined}>Base Shipping + </Col>
            <Col className={styles.outlined}>50%</Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Shipping;
