import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import $ from 'jquery';
import SearchNameInput from './SearchNameInput';
import SearchResultsSearch from './SearchResultsSearch';
import SearchConditionsInput from './SearchConditionsInput';
import AlertNoPlants from '../popup/AlertNoPlants';
import styles from './SearchPageMain.module.scss';

const SearchPageMain = () => {
  const [form, setForm] = useState([]);
  const history = useHistory();
  const searchNow = async (filters) => {
    $('#spinner').show();
    $('#searchResultsNav').hide();
    setForm([]); //resets form for new search

    const sanityClient = require('@sanity/client');
    const client = sanityClient({
      projectId: 'ogg4t6rs',
      dataset: 'production',
      token: '',
      useCdn: true, // `false` if you want to ensure fresh data
    });
    const query = `*[${filters}] | order(category asc) | order(botanicalName asc)`;

    let response = await client.fetch(query);

    if (response === undefined || response.length === 0) {
      $('#alertNoPlants').css('display', 'flex');
      $('#alertNoPlants').delay(500).fadeOut(5000);
      $('#resultsArea').hide();
      $('#spinner').hide();
    } else {
      setForm([...response]);
      $('#spinner').hide();
      history.push('/search');
      $('#searchResultsSearch').show();
      $('#searchArea').hide();
      $('#searchResultsNav').hide();
      window.location.href = '#searchResultsSearch';
    }
  };

  return (
    <Container fluid id="search">
      <section id="searchArea" className={styles.searchArea}>
        <div style={{ textAlign: 'center' }}>
          <h1>Search Botanical Name or Common Name: &nbsp;</h1>
          <SearchNameInput searchByName={(filters) => searchNow(filters)} />

          <hr />
          <h1>...or by Growing Conditions</h1>
          <div>
            <SearchConditionsInput
              searchByConditions={(filters) => searchNow(filters)}
            />
          </div>
        </div>
      </section>
      <SearchResultsSearch resultsArray={form} />
      <AlertNoPlants />
    </Container>
  );
};

export default SearchPageMain;
