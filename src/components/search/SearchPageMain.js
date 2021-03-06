import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import $ from 'jquery';
import SearchNameInput from './inputs/SearchNameInput';
import SearchResultsSearch from './results/SearchResultsSearch';
import SearchKeyword from './inputs/SearchKeyword';
import SearchConditionsInput from './inputs/SearchConditionsInput';
import AlertNoPlants from '../popup/AlertNoPlants';
import styles from './SearchPageMain.module.scss';

const SearchPageMain = () => {
  const [form, setForm] = useState([]);
  const history = useHistory();

  const searchNow = async (query) => {
    $('#spinner').css('display', 'flex');
    setForm([]); //resets form for new search

    const sanityClient = require('@sanity/client');
    const client = sanityClient({
      projectId: 'ogg4t6rs',
      dataset: 'production',
      token: '',
      useCdn: true, // `false` if you want to ensure fresh data
    });
    const querySort = `${query} | order(category asc) | order(botanicalName asc)`;

    let response = await client.fetch(querySort);

    if (response === undefined || response.length === 0) {
      $('#alertNoPlants').css('display', 'flex');
      $('#alertNoPlants').delay(1500).fadeOut(1000);
      $('#resultsArea').hide();
      $('#spinner').css('display', 'none');
    } else {
      setForm([...response]);
      $('#spinner').css('display', 'none');
      history.push('/search');
      $('#searchResultsSearch').show();
      $('#searchArea').hide();
      $('#searchResultsNav').hide();
      window.location.href = '#searchResultsSearch';
    }
  };

  const searchNameNow = async (query) => {
    $('#spinner').css('display', 'flex');
    setForm([]); //resets form for new search

    const sanityClient = require('@sanity/client');
    const client = sanityClient({
      projectId: 'ogg4t6rs',
      dataset: 'production',
      token: '',
      useCdn: true, // `false` if you want to ensure fresh data
    });

    let response = await client.fetch(query);

    if (response === undefined || response.length === 0) {
      $('#alertNoPlants').show();
      $('#alertNoPlants').delay(1500).fadeOut(1000);
      $('#resultsArea').hide();
      $('#spinner').css('display', 'none');
    } else {
      const tempForm = response.exactMatches.concat(response.partialMatches);
      setForm([...tempForm]);
      $('#spinner').css('display', 'none');
      history.push('/search');
      $('#searchResultsSearch').show();
      $('#searchArea').hide();
      $('#searchResultsNav').hide();
      window.location.href = '#searchResultsSearch';
    }
  };

  // $('#searchResultsNav').hide();

  return (
    <Container fluid id="search">
      <section id="searchArea" className={styles.searchArea}>
        <SearchNameInput searchByName={(query) => searchNameNow(query)} />

        <hr />

        <SearchConditionsInput
          searchByConditions={(query) => searchNow(query)}
        />

        <hr />

        <SearchKeyword searchByKeyword={(query) => searchNow(query)} />
      </section>
      <SearchResultsSearch resultsArray={form} />
      <AlertNoPlants />
    </Container>
  );
};

export default SearchPageMain;
