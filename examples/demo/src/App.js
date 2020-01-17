import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import EnvironmentProvider, { withEnvironment} from 'EnvironmentProvider';
import Header from 'shared/Header';
import Footer from 'shared/Footer';
import Routes from './AppRoutes';

import './App.scss';

const RoutesBase = ({environment}) => (<Router basename={environment.baseUrl}>
  <Fragment>
    <Header />
    <Routes />
    <Footer />
  </Fragment>
  </Router>);

const MyRoutes = withEnvironment(RoutesBase);

const App = () => {
  return (
    <EnvironmentProvider>
      <MyRoutes/>
    </EnvironmentProvider>
  );
};

export default App;
