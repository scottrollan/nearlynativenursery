import React from 'react';
import $ from 'jquery';
import { Card } from 'react-bootstrap';
import TopButton from '../../scrollTop/ScrollTop';
import PlantModal from '../../plantModal/PlantModal';
import styles from './SearchResults.module.scss';

class SearchResults extends React.Component {
  showModal = (whichModal) => {
    $(`#${whichModal}`).show();
    $('html').css('overflow-y', 'hidden');
  };

  closeResults = (div) => {
    $(`#${div}`).hide();
    $('#searchArea').show();
  };

  render() {
    return (
      <div className={styles.resultsArea} id={this.props.divId}>
        <button
          className={styles.resultsCloseButton}
          onClick={() => this.closeResults(this.props.divId)}
          style={{ margin: '1rem' }}
        >
          {this.props.buttonText}
        </button>
        <h3>
          We found {this.props.resultsArray.length} items that match that
          criteria:
        </h3>

        <div className={styles.cardGroup}>
          {this.props.resultsArray === null ||
          this.props.resultsArray.length === 0
            ? null
            : this.props.resultsArray.map((p, index) => {
                const modalId = p._id;
                window['show' + modalId] = false;
                let imageUrl = '';
                let hasUniqueImage = false;
                if (
                  p.image === undefined ||
                  p.image.asset === undefined ||
                  p.image.asset._ref === undefined
                ) {
                  return null;
                } else if (
                  p.image.asset._ref !== undefined &&
                  p.image.asset._ref !==
                    'image-a3d829ee02102d79da412cf8fe5f0fac1577254c-175x188-png'
                ) {
                  hasUniqueImage = true;
                  const imageArray = p.image.asset._ref.split('-'); //splits _ref into an array of length 4
                  imageUrl = `https://cdn.sanity.io/images/ogg4t6rs/production/${imageArray[1]}-${imageArray[2]}.${imageArray[3]}`; //gives image <image id>-<original size>.<extension>
                }

                return (
                  <div key={modalId}>
                    <Card
                      className={styles.card}
                      onClick={() => this.showModal(modalId)}
                    >
                      <Card.Header
                        className={styles.centerMiddle}
                        as="h3"
                        style={
                          p.commonName.length > 26 ? { fontSize: '20px' } : null
                        }
                      >
                        {index + 1}. {p.commonName}
                      </Card.Header>
                      <div
                        style={{
                          height: '205px',
                          width: '100%',
                          overflowY: 'hidden',
                        }}
                      >
                        {hasUniqueImage ? (
                          <Card.Img
                            variant="top"
                            src={imageUrl}
                            style={{
                              width: '100%',
                              position: 'relative',
                              top: '50%',
                              transform: 'translateY(-50%)',
                            }}
                          />
                        ) : (
                          <div
                            style={{
                              width: '100%',
                              height: '100%',
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'center',
                              alignItems: 'center',
                              color: 'var(--light-gray)',
                            }}
                          >
                            <i
                              className="fas fa-seedling"
                              style={{
                                fontSize: '10vh',
                              }}
                            ></i>
                          </div>
                        )}
                      </div>
                      <Card.Footer className={styles.cardFooter}>
                        <Card.Title
                          style={{
                            fontSize:
                              p.botanicalName.length > 35 ? 'medium' : 'xlarge',
                          }}
                        >
                          {p.botanicalName} {p.variety}
                        </Card.Title>
                      </Card.Footer>
                    </Card>
                    <PlantModal
                      id={modalId}
                      botanicalName={p.botanicalName}
                      commonName={p.commonName}
                      regionalName={p.regionalName}
                      variety={p.variety}
                      imageUrl={imageUrl}
                      description={p.description}
                      lowZone={p.lowZone}
                      highZone={p.highZone}
                      hasUniqueImage={hasUniqueImage}
                      soilType={p.soilType}
                      pH={p.soilPH}
                      water={p.waterLevel}
                      sunLevel={p.sunlightLevel}
                      foliage={p.foliage}
                      unit={p.amount}
                    />
                  </div>
                );
              })}
        </div>

        <TopButton />
      </div>
    );
  }
}

export default SearchResults;
