import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import EnvironmentProvider, { withEnvironment} from '../../EnvironmentProvider';

import Header from '../Header';
import Footer from '../Footer';
import Routes from '../Routes';


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
