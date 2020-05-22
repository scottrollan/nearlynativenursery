import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import styles from './SearchNameInput.module.scss';

const SearchNameInput = (props) => {
  const [searchName, setSearchName] = useState('');

  const searchByName = (event) => {
    event.preventDefault();
    let inputText = searchName.toLowerCase();
    let botanicalInput = inputText.replace(/^\w/, (c) => c.toUpperCase()); // capitalize first letter of first word only
    let commonInput = inputText
      .split(' ')
      .map((i) => i.replace(/^\w/, (c) => c.toUpperCase()))
      .join(' ');
    const filters = `botanicalName match "${botanicalInput}" || commonName match "${commonInput}" || botanicalName == "${botanicalInput}" || commonName == "${commonInput}"`;
    props.searchByName(filters);
  };

  return (
    <Form onSubmit={(event) => searchByName(event)}>
      <input
        placeholder="Search"
        className={[`${styles.searchInput} sm-2`]}
        type="text"
        name="searchName"
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
      />

      <Button className={styles.nameButton} type="submit">
        Search By Name
      </Button>
    </Form>
  );
};

export default SearchNameInput;
