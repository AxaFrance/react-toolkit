import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import Routes from '../Routes';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Header />
        <Routes />
        <Footer />
      </Fragment>
    </Router>
  );
};

export default App;
