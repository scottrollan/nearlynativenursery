import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import styles from './SearchNameInput.module.scss';

const SearchKeyword = (props) => {
  const [searchValue, setSearchValue] = useState('');

  const searchByKeyword = (event) => {
    event.preventDefault();
    let keywordArray = searchValue.toLowerCase().split(' ');
    for (let i = 0; i < keywordArray.length; i++) {
      keywordArray[i] = `description match "${keywordArray[i]}"`;
    }
    let keywordString = keywordArray.join(' && ');

    const query = `*[${keywordString}]`;

    props.searchByKeyword(query);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h3>Search By Exact Keyword</h3>
      <Form onSubmit={(event) => searchByKeyword(event)} className="nav-link">
        <input
          placeholder="ex: 'sandy' or 'woodland'"
          className={styles.searchInput}
          type="text"
          name="searchKeyword"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <Button className={styles.nameButton} type="submit">
          Search By Keyword
        </Button>
      </Form>
    </div>
  );
};

export default SearchKeyword;
