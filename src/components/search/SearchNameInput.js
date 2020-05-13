import React, { useState } from 'react';
import { Container, Form, Input, Button } from 'semantic-ui-react';
import styles from './SearchNameInput.module.scss';

const SearchNameInput = (props) => {
  const [searchName, setSearchName] = useState('');

  const searchByName = (event) => {
    event.preventDefault();
    console.log(searchName);
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
    <Container>
      <Form onSubmit={(event) => searchByName(event)}>
        <Form.Field>
          <Input
            className={styles.searchInput}
            type="text"
            name="searchName"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
        </Form.Field>

        <Button className={styles.nameButton} type="submit">
          Search By Name
        </Button>
      </Form>
    </Container>
  );
};

export default SearchNameInput;
