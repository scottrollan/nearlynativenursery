import React, { Fragment, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form } from 'react-bootstrap';
import $ from 'jquery';
import AlertNoPlants from '../popup/AlertNoPlants';
import SearchResults from '../search/SearchResultsNav';
import man from '../../media/N3man.png';
import styles from './NavMenu.module.scss';

const NavMenu = () => {
  let history = useHistory();
  const [searchValue, setSearchValue] = useState('');
  const [form, setForm] = useState([]);

  const closeResults = () => {
    $('#searchResultsNav').hide();
  };

  const searchByName = async (event) => {
    $('#searchResultsSearch').hide();
    event.preventDefault();
    const element1 = $('#resultsArea');
    const element2 = $('#resultsAreaNav');
    if (typeof element1 !== 'undefined' && element1 !== null) {
      element1.hide();
    }
    if (typeof element2 !== 'undefined' && element2 !== null) {
      element2.hide();
    }
    let inputText = searchValue.toLowerCase();
    let botanicalInput = inputText.replace(/^\w/, (c) => c.toUpperCase()); // capitalize first letter of first word only
    let commonInput = inputText
      .split(' ')
      .map((i) => i.replace(/^\w/, (c) => c.toUpperCase()))
      .join(' ');
    const filters = `botanicalName match "${botanicalInput}" || commonName match "${commonInput}" || botanicalName == "${botanicalInput}" || commonName == "${commonInput}"`;
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
      $('#alertNoPlants').delay(1500).fadeOut(1000);
      $('#resultsAreaNav').hide();
      history.push('/search');
      $('#searchArea').show();
      $('#spinner').hide();
    } else {
      setForm([...response]);
      history.push('/search');
      $('#searchArea').hide();
      $('#searchResultsNav').show();
      // $('#searchResultsSearch').hide();
      window.location.href = '#searchResultsNav';
      $('#spinner').hide();
    }
  };

  return (
    <Fragment>
      <AlertNoPlants />
      <Navbar bg="light" expand="lg">
        <Navbar.Brand style={{ maxHeight: '50px' }}>
          <img src={man} alt="" style={{ maxHeight: '50px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link
              style={{ color: 'inherit' }}
              className="item nav-link"
              to="/"
              exact="true"
              onClick={() => closeResults()}
            >
              Home
            </Link>

            <Link
              style={{ color: 'inherit' }}
              className="item nav-link"
              to="/contact"
              onClick={() => closeResults()}
            >
              Contact
            </Link>
            <Link
              style={{ color: 'inherit' }}
              className="item nav-link"
              to="/search"
            >
              Search
            </Link>

            <NavDropdown title="About" className="item">
              <Link
                className={[`${styles.dropdownLink} dropdown-item nav-link`]}
                to="/about"
                onClick={() => closeResults()}
              >
                The Nursery
              </Link>
              <Link
                className={[`${styles.dropdownLink} dropdown-item nav-link`]}
                to="/hours"
                onClick={() => closeResults()}
              >
                Hours of Operation
              </Link>
              <Link
                className={[`${styles.dropdownLink} dropdown-item nav-link`]}
                to="/shipping"
                onClick={() => closeResults()}
              >
                Shipping Costs
              </Link>

              <Link
                className={[`${styles.dropdownLink} dropdown-item nav-link`]}
                to="/location"
                onClick={() => closeResults()}
              >
                Location
              </Link>
              <hr />
              <a
                className={[`${styles.dropdowna} dropdown-item nav-link`]}
                href="https://planthardiness.ars.usda.gov/PHZMWeb/"
                target="_blank"
                rel="noopener noreferrer"
              >
                USDA Hardiness Zones
              </a>
            </NavDropdown>
          </Nav>
          <Nav>
            <NavDropdown title="Our Friends" className="nav-link">
              <a
                className={[`${styles.dropdowna} dropdown-item nav-link`]}
                href="https://www.rarepalmseeds.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rare Palm Seeds
              </a>
              <a
                className={[`${styles.dropdowna} dropdown-item nav-link`]}
                href="https://gnps.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Georgia Native Plant Society
              </a>
              <a
                className={[`${styles.dropdowna} dropdown-item nav-link`]}
                href="https://garivers.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Georgia River Network
              </a>
            </NavDropdown>
            <Form
              onSubmit={(event) => searchByName(event)}
              className="nav-link"
            >
              <input
                placeholder="Search"
                className={[`${styles.searchInput} sm-2`]}
                type="text"
                name="searchName"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <SearchResults
        resultsArray={form}
        buttonFunction={() => closeResults()}
        buttonText="Close"
      />
    </Fragment>
  );
};

export default NavMenu;
