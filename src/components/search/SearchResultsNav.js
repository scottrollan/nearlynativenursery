import React from 'react';
// import { Redirect } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import PlantModal from './PlantModal';
import defaultImage from '../../media/no-image-available-icon.png';
import styles from './SearchResults.module.scss';

class SearchResultsNav extends React.Component {
  showModal = (whichModal) => {
    const modal = document.getElementById(whichModal);
    modal.style.display = 'inherit';
    document.querySelector('html').style.overflowY = 'hidden';
  };

  closeResults = () => {
    document.getElementById('resultsArea').style.display = 'none';
    document.getElementById('spinner').style.display = 'none';
    document.getElementById('searchCondButton').style.display = 'inherit';
    document.getElementById('searchArea').style.display = 'inherit';
  };

  render() {
    return (
      <div className={styles.resultsArea} id="resultsAreaNav">
        <Button secondary="true" onClick={() => this.closeResults()}>
          {this.props.buttonText}
        </Button>
        <h3>
          We found {this.props.resultsArray.length} items that match that
          criteria:
        </h3>
        <div className={styles.cardGroup}>
          {this.props.resultsArray === null ||
          this.props.resultsArray.length === 0
            ? null
            : this.props.resultsArray.map((p) => {
                const modalId = p._id;
                window['show' + modalId] = false;
                let imageUrl = '';
                let hasUniqueImage = false;
                if (
                  p.image.asset._ref !== undefined &&
                  p.image.asset._ref !==
                    'image-a3d829ee02102d79da412cf8fe5f0fac1577254c-175x188-png'
                ) {
                  hasUniqueImage = true;
                  const imageArray = p.image.asset._ref.split('-'); //splits _ref into an array of length 4
                  imageUrl = `https://cdn.sanity.io/images/ogg4t6rs/production/${imageArray[1]}-${imageArray[2]}.${imageArray[3]}`; //gives image <image id>-<original size>.<extension>
                } else {
                  imageUrl = defaultImage;
                }
                return (
                  <div key={modalId}>
                    <Card className={styles.card}>
                      <Card.Header as="h3">{p.commonName}</Card.Header>
                      <Card.Img
                        variant="top"
                        src={imageUrl}
                        style={
                          hasUniqueImage
                            ? { width: '275px' }
                            : { width: '70px', margin: '0 calc(50% - 35px)' }
                        }
                      />
                      <Card.Body>
                        <Card.Title>
                          {p.botanicalName} {p.variety}
                        </Card.Title>
                      </Card.Body>
                      <Card.Footer>
                        <Button onClick={() => this.showModal(modalId)}>
                          See Details
                        </Button>
                      </Card.Footer>
                    </Card>
                    <PlantModal
                      id={modalId}
                      botanicalName={p.botanicalName}
                      commonName={p.commonName}
                      variety={p.variety}
                      imageUrl={imageUrl}
                      description={p.description}
                      hasUniqueImage={hasUniqueImage}
                      soilType={p.soilType}
                    />
                  </div>
                );
              })}
        </div>
      </div>
    );
  }
}

export default SearchResultsNav;
