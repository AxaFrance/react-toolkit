import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import EnvironmentProvider from '../../EnvironmentProvider';

import Header from '../Header';
import Footer from '../Footer';
import Routes from '../Routes';

const App = () => {
  return (
    <EnvironmentProvider>
      <Router basename={'/react-toolkit/latest/demo/'}>
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
