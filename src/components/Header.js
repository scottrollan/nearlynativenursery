import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Input, Dropdown, Menu } from 'semantic-ui-react';
import man from '../media/N3man.png';
import styles from './Header.module.scss';

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Menu className="ui stackable  menu">
          <Menu.Item>
            <img src={man} alt="" />
          </Menu.Item>

          <NavLink className="item" to="/" exact>
            Home
          </NavLink>

          <NavLink className="item" to="/contact">
            Contact
          </NavLink>
          <NavLink className="item" to="/search">
            Search
          </NavLink>

          <Dropdown item text="About">
            <Dropdown.Menu>
              <Link className={styles.dropdownLink} to="/about">
                The Nursery
              </Link>
              <Link className={styles.dropdownLink} to="/hours">
                Hours of Operation
              </Link>
              <Link className={styles.dropdownLink} to="/shipping">
                Shipping Costs
              </Link>
              <Link className={styles.dropdownLink} to="/location">
                Location
              </Link>
              <div className="divider"></div>{' '}
              <Link
                className={styles.dropdownLink}
                to="https://planthardiness.ars.usda.gov/PHZMWeb/"
                target="_blank"
                rel="noopener noreferrer"
              >
                USDA Hardiness Zones
              </Link>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
            <Dropdown item text="Our Friends">
              <Dropdown.Menu>
                <Link
                  className={styles.dropdownLink}
                  to="https://www.rarepalmseeds.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rare Palm Seeds
                </Link>
                <Link
                  className={styles.dropdownLink}
                  to="https://gnps.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Georgia Native Plant Society
                </Link>
                <Link
                  className={styles.dropdownLink}
                  to="https://garivers.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Georgia River Network
                </Link>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu>
      </React.Fragment>
    );
  }
}

export default Header;
