import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthenticationProvider } from '@axa-fr/react-oidc-context';
import EnvironmentProvider, { withEnvironment} from 'EnvironmentProvider';
import './App.scss';

import Header from 'shared/Header';
import Footer from 'shared/Footer';
import Routes from './Routes';

const RoutesBase = ({environment}) => (
  <AuthenticationProvider
    configuration={environment.oidc.configuration}
    isEnabled={environment.oidc.isEnabled}
  >
    <Router basename={environment.baseUrl}>
      <Header />
      <Routes />
      <Footer />
    </Router>
  </AuthenticationProvider>);

const MyRoutes = withEnvironment(RoutesBase);

const App = () => {
  return (
    <EnvironmentProvider>
      <MyRoutes/>
    </EnvironmentProvider>
  );
};

export default App;
