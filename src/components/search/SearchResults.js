import React from 'react';
import { Image, Icon, Header, Divider, Grid } from 'semantic-ui-react';
import { Container, Button, Card } from 'react-bootstrap';
import defaultImage from '../../media/no-image-available-icon.png';
import styles from './SearchResults.module.scss';

class SearchResults extends React.Component {
  state = { showModal: false };

  showThisModal = (whichModal) => {
    document.getElementById(whichModal).style.display = 'inline';
  };
  hideThisModal = (whichModal) => {
    document.getElementById(whichModal).style.display = 'none';
  };
  returnToSearch = () => {
    document.getElementById('resultsArea').style.display = 'none';
    document.getElementById('searchArea').style.display = 'inherit';
    window.location.href = '#searchArea';
  };

  render() {
    return (
      <Container fluid id="resultsArea" style={{ display: 'none' }}>
        {/* <ToTopButton /> */}
        <div className={styles.sticky}>
          <Button secondary onClick={this.returnToSearch}>
            Return to Search Page
          </Button>
        </div>
        <h5 style={{ textAlign: 'center' }}>
          We found {this.props.resultsArray.length} items matching that
          criteria...
        </h5>

        <div className={styles.cardGroup}>
          {this.props.resultsArray === null ||
          this.props.resultsArray.length === 0
            ? null
            : this.props.resultsArray.map((d) => {
                const modalId = d._id;
                let imageUrl = '';
                let hasUniqueImage = false;
                if (
                  d.image.asset._ref !== undefined &&
                  d.image.asset._ref !==
                    'image-a3d829ee02102d79da412cf8fe5f0fac1577254c-175x188-png'
                ) {
                  hasUniqueImage = true;
                  const imageArray = d.image.asset._ref.split('-'); //splits _ref into an array of length 4
                  imageUrl = `https://cdn.sanity.io/images/ogg4t6rs/production/${imageArray[1]}-${imageArray[2]}.${imageArray[3]}`; //gives image <image id>-<original size>.<extension>
                } else {
                  imageUrl = defaultImage;
                }

                return (
                  <React.Fragment key={d._id}>
                    <Card className={styles.card}>
                      <Card.Body>
                        <Card.Title>{d.commonName}</Card.Title>

                        <Card.Subtitle>
                          {d.botanicalName} {d.variety}
                        </Card.Subtitle>
                        <Card.Text>Category: {d.category}</Card.Text>
                        {hasUniqueImage === true ? (
                          <a
                            href={`${imageUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Card.Img
                              variant="top"
                              style={{ width: '360px' }}
                              src={imageUrl}
                            />
                          </a>
                        ) : (
                          <Card.Img
                            variant="top"
                            style={{
                              width: '360px',
                              padding: '30%',
                            }}
                            src={imageUrl}
                          />
                        )}
                      </Card.Body>
                      <Card.Footer>
                        <Button onClick={() => this.showThisModal(modalId)}>
                          See Details
                        </Button>
                      </Card.Footer>
                    </Card>

                    <div
                      className={styles.modal}
                      id={modalId}
                      style={{ display: 'none' }}
                    >
                      <div
                        className={styles.modalOverlay}
                        onClick={() => this.hideThisModal(modalId)}
                      ></div>

                      <div
                        className={styles.modalContent}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Header as="h3">{d.commonName}</Header>

                        <Header as="h5" style={{ color: 'var(--dark-gray)' }}>
                          {d.botanicalName} {d.variety} {d.regionalName}
                        </Header>

                        <div>
                          {hasUniqueImage === true ? (
                            //if it has a unique image, it is clickable
                            <a
                              href={`${imageUrl}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Image
                                size="small"
                                wrapped
                                floated="left"
                                src={imageUrl}
                                alt=""
                              />
                            </a>
                          ) : null}
                          <p>{d.description}</p>
                          <p>{d.notes}</p>
                          <p>
                            Thrives from zone {d.lowZone} to zone {d.highZone}.
                          </p>
                        </div>
                        <Divider />
                        <div>
                          <Grid>
                            <Grid.Row columns="2">
                              <Grid.Column style={{ textAlign: 'left' }}>
                                <Header as="h5" style={{ marginBottom: '5px' }}>
                                  Soil types
                                </Header>
                                <ul className={styles.mUl}>
                                  {d.soilType.map((type, index) => (
                                    <li key={index}>{type}</li>
                                  ))}
                                </ul>
                              </Grid.Column>
                              <Grid.Column style={{ textAlign: 'left' }}>
                                <Header as="h5" style={{ marginBottom: '5px' }}>
                                  Soil Ph
                                </Header>
                                <ul className={styles.mUl}>
                                  {d.soilPH.map((ph, index) => (
                                    <li key={index}>{ph}</li>
                                  ))}
                                </ul>
                              </Grid.Column>
                            </Grid.Row>
                            <Grid.Row columns="2">
                              <Grid.Column style={{ textAlign: 'left' }}>
                                <Header as="h5" style={{ marginBottom: '5px' }}>
                                  Water level
                                </Header>
                                <ul className={styles.mUl}>
                                  {d.waterLevel.map((water, index) => (
                                    <li key={index}>{water}</li>
                                  ))}
                                </ul>
                              </Grid.Column>
                            </Grid.Row>
                            <Grid.Row columns="2">
                              <Grid.Column style={{ textAlign: 'left' }}>
                                <Header as="h5" style={{ marginBottom: '5px' }}>
                                  Sun exposure
                                </Header>
                                <ul className={styles.mUl}>
                                  {d.sunlightLevel.map((sun, index) => (
                                    <li key={index}>{sun}</li>
                                  ))}
                                </ul>
                              </Grid.Column>
                              <Grid.Column style={{ textAlign: 'left' }}>
                                <Header as="h5" style={{ marginBottom: '5px' }}>
                                  Foliage
                                </Header>
                                <ul className={styles.mUl}>
                                  {d.foliage.map((f, index) => (
                                    <li key={index}>{f}</li>
                                  ))}
                                </ul>
                              </Grid.Column>
                            </Grid.Row>

                            <Grid.Row columns="2">
                              <Grid.Column style={{ textAlign: 'left' }}>
                                <Header as="h5" style={{ marginBottom: '0' }}>
                                  Container Size
                                </Header>
                                <ul className={styles.mUl}>
                                  {d.amount.map((p, index) => (
                                    <li key={index}>{p.containerSize}</li>
                                  ))}
                                </ul>
                              </Grid.Column>
                              <Grid.Column style={{ textAlign: 'left' }}>
                                <Header as="h5" style={{ marginBottom: '0' }}>
                                  Price
                                </Header>
                                <ul className={styles.mUl}>
                                  {d.amount.map((p, index) => (
                                    <li key={index}>${p.price}</li>
                                  ))}
                                </ul>
                              </Grid.Column>
                            </Grid.Row>
                          </Grid>
                        </div>
                        <div className={styles.modalPush}></div>
                        <div className={styles.modalFooter}>
                          {hasUniqueImage !== true ? (
                            //if there is a placeholder image, find it on google images
                            <Button
                              secondary
                              href={`http://www.google.com/search?q=${d.botanicalName}${d.variety}&tbm=isch`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {' '}
                              {d.botanicalName} on Google Images &nbsp; &nbsp;
                              <Icon name="search" size="large" />
                            </Button>
                          ) : null}
                          <Button
                            primary
                            onClick={() => this.hideThisModal(modalId)}
                          >
                            Close
                          </Button>
                        </div>
                      </div>
                    </div>
                    {/* end modal content */}
                  </React.Fragment>
                );
              })}
        </div>
      </Container>
    );
  }
}

export default SearchResults;
