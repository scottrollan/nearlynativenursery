import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import SearchNameInput from './SearchNameInput';
import SearchResults from './SearchResults';
import SearchConditionsInput from './SearchConditionsInput';
import styles from './SearchPageMain.module.scss';

const SearchPageMain = () => {
  const [form, setForm] = useState([]);

  const searchNow = async (filters) => {
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
      document.getElementById('spinner').style.display = 'none';
      document.getElementById('searchCondButton').style.display =
        'inline-block';
      alert('...no plants match those specifications...');
      document.getElementById('resultsArea').style.display = 'none';
    } else {
      setForm([...response]);
      document.getElementById('resultsArea').style.display = 'block';
      document.getElementById('searchArea').style.display = 'none';
      window.location.href = '#resultsArea';
    }
  };

  return (
    <Container fluid>
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
      <SearchResults buttonText="Return to Search" resultsArray={form} />
    </Container>
  );
};

export default SearchPageMain;
