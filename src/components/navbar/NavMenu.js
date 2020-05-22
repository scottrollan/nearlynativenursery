import React, { Fragment, Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import man from '../../media/N3man.png';
import styles from './NavMenu.module.scss';

class NavMenu extends Component {
  state = {
    searchValue: '',
    redirect: false,
    filters: '',
  };

  navSearch = (event, keyword) => {
    // const searchByName = (event) => {
    event.preventDefault();
    let inputText = keyword.toLowerCase();
    let botanicalInput = inputText.replace(/^\w/, (c) => c.toUpperCase()); // capitalize first letter of first word only
    let commonInput = inputText
      .split(' ')
      .map((i) => i.replace(/^\w/, (c) => c.toUpperCase()))
      .join(' ');
    this.setState({
      filters: `botanicalName match "${botanicalInput}" || commonName match "${commonInput}" || botanicalName == "${botanicalInput}" || commonName == "${commonInput}"`,
    });
    // };
    this.setState({ redirect: true });
  };
  render() {
    if (this.state.redirect) {
      return (
        <Redirect
          push
          to={{
            pathname: '/search',
            state: { filters: this.state.filters },
          }}
        />
      );
    } else {
      return (
        <Fragment>
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
                >
                  Home
                </Link>

                <Link
                  style={{ color: 'inherit' }}
                  className="item nav-link"
                  to="/contact"
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
                    className={[
                      `${styles.dropdownLink} dropdown-item nav-link`,
                    ]}
                    to="/about"
                  >
                    The Nursery
                  </Link>
                  <Link
                    className={[
                      `${styles.dropdownLink} dropdown-item nav-link`,
                    ]}
                    to="/hours"
                  >
                    Hours of Operation
                  </Link>
                  <Link
                    className={[
                      `${styles.dropdownLink} dropdown-item nav-link`,
                    ]}
                    to="/shipping"
                  >
                    Shipping Costs
                  </Link>

                  <Link
                    className={[
                      `${styles.dropdownLink} dropdown-item nav-link`,
                    ]}
                    to="/location"
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
                  className="item nav-link"
                  onSubmit={() => this.navSearch(this.state.searchValue)}
                >
                  <FormControl
                    placeholder="Search"
                    className={[`${styles.searchInput} sm-2`]}
                    type="text"
                    name="searchName"
                    value={this.state.searchValue}
                    onChange={(e) =>
                      this.setState({ searchValue: e.target.value })
                    }
                  />
                </Form>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Fragment>
      );
    }
  }
}

export default NavMenu;
