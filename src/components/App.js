import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Search from './Search';
import Hours from './Hours';
import Shipping from './Shipping';
import Location from './Location';
import styles from './App.module.scss';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <React.Fragment>
      <div className={`ui container ${styles.App}`}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/search" component={Search}></Route>
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
