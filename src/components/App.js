import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './home/Home';
import About from './about/About';
import Contact from './contact/Contact';
import Hours from './hours/Hours';
import Shipping from './shipping/Shipping';
import Location from './location/Location';
import SearchPageMain from './search/SearchPageMain';
import styles from './App.module.scss';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

function App() {
  return (
    <React.Fragment>
      <div className={`${styles.App}`}>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/search" component={SearchPageMain}></Route>
            <Route path="/hours" component={Hours}></Route>
            <Route path="/shipping" component={Shipping}></Route>
            <Route path="/location" component={Location}></Route>
          </Switch>
        </BrowserRouter>
        <div className={styles.push}></div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
