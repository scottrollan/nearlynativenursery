import React from 'react';
import {
  Container,
  Button,
  Card,
  Image,
  Icon,
  Divider,
} from 'semantic-ui-react';
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
    // document.getElementById('spinner').style.display = 'none';
    // document.getElementById('searchCondButton').style.display = 'inline-block';
  };

  render() {
    return (
      <Container id="resultsArea" style={{ display: 'none' }}>
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

        <Card.Group style={{ justifyContent: 'center' }}>
          {this.props.resultsArray === null ||
          this.props.resultsArray.length === 0
            ? null
            : this.props.resultsArray.map((d) => {
                const modalId = d._id;
                const descIntro = d.description
                  .split(' ')
                  .slice(0, 21)
                  .join(' '); //first 20 words
                const descEnding = d.description.split(' ').slice(21).join(' '); //21st through the last word
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
                    <Card>
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
                        <Button onClick={() => this.showThisModal(modalId)}>
                          See Details
                        </Button>
                      </Card.Content>
                    </Card>

                    <div
                      className={styles.modal}
                      id={modalId}
                      style={{ display: 'none' }}
                    >
                      <div className={styles.modalOverlay}></div>
                      <Card className={styles.modalContent}>
                        <Card.Content scrolling>
                          <Card.Header>{d.commonName}</Card.Header>

                          <Card.Meta as="h3">
                            {d.botanicalName} {d.variety} {d.regionalName}
                          </Card.Meta>

                          <Card.Description>
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
                            <p style={{ maxWidth: '100%' }}>
                              {descIntro}
                              {/* <Button
                                onClick={() => this.expandDescr(`${modalId}`)}
                              >
                                keep reading
                              </Button>
                              <span
                                id={`long${modalId}`}
                                style={{ display: 'none' }}
                              >
                                {' '} */}
                              {descEnding}{' '}
                              {/* <Button
                                  onClick={() =>
                                    this.collapseDescr(`${modalId}`)
                                  }
                                >
                                  see less
                                </Button>
                              </span> */}
                            </p>
                            <p>{d.notes}</p>
                            <p>
                              Thrives from zone {d.lowZone} to zone {d.highZone}
                              .
                            </p>
                          </Card.Description>
                          <Divider />
                          <Card.Content
                            style={{
                              display: 'flex',
                              justifyContent: 'space-around',
                              flexWrap: 'wrap',
                            }}
                          >
                            <div style={{ textAlign: 'left' }}>
                              <Card.Header
                                as="h5"
                                style={{ marginBottom: '5px' }}
                              >
                                Soil types
                              </Card.Header>
                              <ul className={styles.mUl}>
                                {d.soilType.map((type, index) => (
                                  <li key={index}>{type}</li>
                                ))}
                              </ul>
                            </div>
                            <div style={{ textAlign: 'left' }}>
                              <Card.Header
                                as="h5"
                                style={{ marginBottom: '5px' }}
                              >
                                Soil Ph
                              </Card.Header>
                              <ul className={styles.mUl}>
                                {d.soilPH.map((ph, index) => (
                                  <li key={index}>{ph}</li>
                                ))}
                              </ul>
                            </div>

                            <div style={{ textAlign: 'left' }}>
                              <Card.Header
                                as="h5"
                                style={{ marginBottom: '5px' }}
                              >
                                Water level
                              </Card.Header>
                              <ul className={styles.mUl}>
                                {d.waterLevel.map((water, index) => (
                                  <li key={index}>{water}</li>
                                ))}
                              </ul>
                            </div>

                            <div style={{ textAlign: 'left' }}>
                              <Card.Header
                                as="h5"
                                style={{ marginBottom: '5px' }}
                              >
                                Sun exposure
                              </Card.Header>
                              <ul className={styles.mUl}>
                                {d.sunlightLevel.map((sun, index) => (
                                  <li key={index}>{sun}</li>
                                ))}
                              </ul>
                            </div>
                            <div style={{ textAlign: 'left' }}>
                              <Card.Header
                                as="h5"
                                style={{ marginBottom: '5px' }}
                              >
                                Foliage
                              </Card.Header>
                              <ul className={styles.mUl}>
                                {d.foliage.map((f, index) => (
                                  <li key={index}>{f}</li>
                                ))}
                              </ul>
                            </div>
                            <div></div>

                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'row',
                                flexWrap: 'nowrap',
                                justifyContent: 'space-between',
                              }}
                            >
                              <div
                                style={{
                                  textAlign: 'left',
                                  marginRight: '15px',
                                }}
                              >
                                <Card.Header
                                  as="h5"
                                  style={{ marginBottom: '0' }}
                                >
                                  Container Size
                                </Card.Header>
                                <ul className={styles.mUl}>
                                  {d.amount.map((p, index) => (
                                    <li key={index}>{p.containerSize}</li>
                                  ))}
                                </ul>
                              </div>
                              <div style={{ textAlign: 'left' }}>
                                <Card.Header
                                  as="h5"
                                  style={{ marginBottom: '0' }}
                                >
                                  Price
                                </Card.Header>
                                <ul className={styles.mUl}>
                                  {d.amount.map((p, index) => (
                                    <li key={index}>${p.price}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </Card.Content>
                        </Card.Content>

                        <Card.Content extra>
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
                        </Card.Content>
                      </Card>
                      {/* end modal content */}
                    </div>
                  </React.Fragment>
                );
              })}
        </Card.Group>
      </Container>
    );
  }
}

export default SearchResults;
