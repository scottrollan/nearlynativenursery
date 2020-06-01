import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import styles from './SearchNameInput.module.scss';

const SearchNameInput = (props) => {
  const [searchValue, setSearchValue] = useState('');

  const searchByName = (event) => {
    event.preventDefault();
    let inputText = searchValue.toLowerCase();
    let botanicalInput = inputText.replace(/^\w/, (c) => c.toUpperCase()); // capitalize first letter of first word only
    let commonInput = inputText
      .split(' ')
      .map((i) => i.replace(/^\w/, (c) => c.toUpperCase()))
      .join(' ');
    const filters = `botanicalName match "${botanicalInput}" || commonName match "${commonInput}" || botanicalName == "${botanicalInput}" || commonName == "${commonInput}"`;
    props.searchByName(filters);
  };

  return (
    <Form onSubmit={(event) => searchByName(event)} className="nav-link">
      <input
        placeholder="Search"
        className={styles.searchInput}
        type="text"
        name="searchName"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      <Button className={styles.nameButton} type="submit">
        Search By Name
      </Button>
    </Form>
  );
};

export default SearchNameInput;
