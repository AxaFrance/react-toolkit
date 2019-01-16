import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import EnvironmentProvider from 'EnvironmentProvider';

import Header from 'layout/Header';
import Footer from 'layout/Footer';
import Routes from 'layout/Routes';

const App = () => {
  return (
    <EnvironmentProvider>
      <Router>
        <Fragment>
          <Header />
          <Routes />
          <Footer />
        </Fragment>
      </Router>
    </EnvironmentProvider>
  );
};

export default App;
