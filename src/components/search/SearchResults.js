import React from 'react';
import { Container, Button, Card, Image } from 'semantic-ui-react';
import defaultImage from '../../media/no-image-available-icon.png';
import styles from './SearchResults.module.scss';

class SearchResults extends React.Component {
  openModal = (whichPlantModal) => {
    document.getElementById(whichPlantModal).style.cssText =
      'opacity: 1; visibility: visible;';
  };

  hideModal = (whichPlantModal) => {
    document.getElementById(whichPlantModal).style.cssText =
      'opacity: 0; visibility: hidden;';
  };

  expandDescr = (whichDescr) => {
    document.getElementById(`short${whichDescr}`).style.display = 'none';
    document.getElementById(`long${whichDescr}`).style.display = 'inline';
  };

  collapseDescr = (whichDescr) => {
    document.getElementById(`long${whichDescr}`).style.display = 'none';
    document.getElementById(`short${whichDescr}`).style.display = 'inline';
  };

  returnToSearch = () => {
    document.getElementById('resultsArea').style.display = 'none';
    document.getElementById('searchArea').style.display = 'inline';
    window.location.href = '#searchArea';
    document.getElementById('spinner').style.display = 'none';
    document.getElementById('searchCondButton').style.display = 'inline-block';
  };

  render() {
    return (
      <Container id="resultsArea" style={{ display: 'none' }}>
        {/* <ToTopButton /> */}
        <div className={styles.sticky}>
          <Button className={styles.returnButton} onClick={this.returnToSearch}>
            Return to Search Page
          </Button>
        </div>
        <h5 style={{ textAlign: 'center' }}>
          We found {this.props.resultsArray.length} items matching that
          criteria...
        </h5>
        <Card.Group style={{ justifyContent: 'center' }}>
          {this.props.resultsArray === null ||
          this.props.resultsArray.length === 0
            ? null
            : this.props.resultsArray.map((d, index) => {
                const modalId = d._id;
                const descIntro = d.description
                  .split(' ')
                  .slice(0, 21)
                  .join(' '); //first 20 words
                const descEnding = d.description.split(' ').slice(21).join(' '); //21st through the last word
                let imageUrl = '';
                let hasUniqueImage = false;
                console.log(d.image.asset._ref);
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
                  <Card
                    // className={styles.card}
                    key={d._id}
                  >
                    <Card.Content>
                      <Card.Header>{d.commonName}</Card.Header>

                      <Card.Meta>
                        {d.botanicalName} {d.variety}
                      </Card.Meta>
                      <Card.Description>
                        Category: {d.category}
                      </Card.Description>
                      {hasUniqueImage === true ? (
                        <a
                          href={`${imageUrl}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image size="small" src={imageUrl} />
                        </a>
                      ) : (
                        <Image size="small" src={imageUrl} />
                      )}
                    </Card.Content>
                    <Card.Content extra>
                      <Button onClick={() => this.openModal(`${modalId}`)}>
                        See Details
                      </Button>

                      {/* MODAL STARTS HERE */}
                      <div className={styles.modal} id={`${modalId}`}>
                        <div className={styles.modalContent}>
                          <span
                            id={styles.xButton}
                            onClick={() => this.hideModal(`${modalId}`)}
                          >
                            X
                          </span>
                          <h4>{d.commonName}</h4>

                          <h5>
                            <i>
                              {d.botanicalName} {d.variety}
                            </i>
                          </h5>
                          {d.regionalName ? (
                            <h5>Regional Name: {d.regionalName}</h5>
                          ) : null}
                          <p>
                            {descIntro}
                            <span id={`short${modalId}`}>
                              ...{' '}
                              <Button
                                className={styles.littleButton}
                                onClick={() => this.expandDescr(`${modalId}`)}
                              >
                                keep reading
                              </Button>
                            </span>
                            <span
                              id={`long${modalId}`}
                              style={{ display: 'none' }}
                            >
                              {' '}
                              {descEnding}{' '}
                              <Button
                                className={styles.littleButton}
                                onClick={() => this.collapseDescr(`${modalId}`)}
                              >
                                see less
                              </Button>
                            </span>
                          </p>
                          <p>{d.notes}</p>
                          <p>
                            Thrives from zone {d.lowZone} to zone {d.highZone}.
                          </p>
                          {/* ////////////// TABLE ///////////////////////////////////////////////////////////// */}
                          <div
                            style={{
                              display: 'flex',
                              alignContent: 'flex-start',
                              justifyContent: 'space-around',
                              flexWrap: 'wrap',
                            }}
                          >
                            <div className={styles.catItems}>
                              <h4 className={styles.catHeading}>Soil types</h4>
                              <ul>
                                {d.soilType.map((type, index) => (
                                  <li key={index}>{type}</li>
                                ))}
                              </ul>
                            </div>
                            <div className={styles.catItems}>
                              <h4 className={styles.catHeading}>Soil Ph</h4>
                              <ul>
                                {d.soilPH.map((ph, index) => (
                                  <li key={index}>{ph}</li>
                                ))}
                              </ul>
                            </div>

                            <div className={styles.catItems}>
                              <h4 className={styles.catHeading}>Water level</h4>
                              <ul>
                                {d.waterLevel.map((water, index) => (
                                  <li key={index}>{water}</li>
                                ))}
                              </ul>
                            </div>

                            <div className={styles.catItems}>
                              <h4 className={styles.catHeading}>
                                Sun exposure
                              </h4>
                              <ul>
                                {d.sunlightLevel.map((sun, index) => (
                                  <li key={index}>{sun}</li>
                                ))}
                              </ul>
                            </div>
                            <div className={styles.catItems}>
                              <h4 className={styles.catHeading}>Foliage</h4>
                              <ul>
                                {d.foliage.map((f, index) => (
                                  <li key={index}>{f}</li>
                                ))}
                              </ul>
                            </div>
                            <div className={styles.catItems}></div>

                            <div className={styles.catItems}>
                              <h4 className={styles.catHeading}>
                                Container Size
                              </h4>
                              <ul>
                                {d.amount.map((p, index) => (
                                  <li key={index}>{p.containerSize}</li>
                                ))}
                              </ul>
                            </div>
                            <div className={styles.catItems}>
                              <h4 className={styles.catHeading}>Price</h4>
                              <ul>
                                {d.amount.map((p, index) => (
                                  <li key={index}>${p.price}</li>
                                ))}
                              </ul>
                            </div>
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                width: '30%',
                                padding: '0 0 20px 0',
                              }}
                            >
                              {hasUniqueImage === true ? (
                                //if it has a unique image, it is clickable
                                <a
                                  href={`${imageUrl}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <img
                                    src={`${imageUrl}?w=100&fit=scale`}
                                    alt=""
                                  />
                                </a>
                              ) : (
                                //if there is a placeholder image, find it on google images

                                <Button
                                  style={{
                                    margin: '0',
                                    width: 'auto',
                                    maxWidth: '100px',
                                    fontSize: '16px',
                                    padding: '4px',
                                  }}
                                >
                                  <a
                                    href={`http://www.google.com/search?q=${d.botanicalName} ${d.variety}&tbm=isch`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ textDecoration: 'none' }}
                                  >
                                    {d.botanicalName} on Google Images
                                  </a>
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                        {/* end modal content */}
                      </div>
                    </Card.Content>
                  </Card>
                );
              })}
        </Card.Group>
      </Container>
    );
  }
}

export default SearchResults;
