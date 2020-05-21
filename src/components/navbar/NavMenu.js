import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import man from '../../media/N3man.png';
import styles from './NavMenu.module.scss';

class NavMenu extends React.Component {
  render() {
    return (
      <React.Fragment>
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
                  className={[`${styles.dropdownLink} dropdown-item nav-link`]}
                  to="/about"
                >
                  The Nursery
                </Link>
                <Link
                  className={[`${styles.dropdownLink} dropdown-item nav-link`]}
                  to="/hours"
                >
                  Hours of Operation
                </Link>
                <Link
                  className={[`${styles.dropdownLink} dropdown-item nav-link`]}
                  to="/shipping"
                >
                  Shipping Costs
                </Link>

                <Link
                  className={[`${styles.dropdownLink} dropdown-item nav-link`]}
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
              <Form>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default NavMenu;
