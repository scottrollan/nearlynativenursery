import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import { Divider } from 'semantic-ui-react';
import man from '../../media/N3man.png';
import styles from './Navbar.module.scss';

class Header extends React.Component {
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
              <Nav.Link>
                <NavLink
                  style={{ color: 'inherit' }}
                  className="item"
                  to="/"
                  exact
                >
                  Home
                </NavLink>
              </Nav.Link>

              <Nav.Link>
                <NavLink
                  style={{ color: 'inherit' }}
                  className="item"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  style={{ color: 'inherit' }}
                  className="item"
                  to="/search"
                >
                  Search
                </NavLink>
              </Nav.Link>

              <NavDropdown title="About">
                <NavDropdown.Item>
                  <Link className={styles.dropdownLink} to="/about">
                    The Nursery
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className={styles.dropdownLink} to="/hours">
                    Hours of Operation
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className={styles.dropdownLink} to="/shipping">
                    Shipping Costs
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className={styles.dropdownLink} to="/location">
                    Location
                  </Link>
                </NavDropdown.Item>
                <Divider />
                <NavDropdown.Item>
                  <Link
                    className={styles.dropdownLink}
                    to="https://planthardiness.ars.usda.gov/PHZMWeb/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    USDA Hardiness Zones
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <NavDropdown title="Our Friends">
                <NavDropdown.Item>
                  <Link
                    className={styles.dropdownLink}
                    to="https://www.rarepalmseeds.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Rare Palm Seeds
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    className={styles.dropdownLink}
                    to="https://gnps.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Georgia Native Plant Society
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    className={styles.dropdownLink}
                    to="https://garivers.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Georgia River Network
                  </Link>
                </NavDropdown.Item>
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

export default Header;
