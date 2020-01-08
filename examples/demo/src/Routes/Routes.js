import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Home';
import New from '../quote/New';
import Confirm from '../quote/Confirm';
import PageNotFound from '../NotFound';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/new" component={New} />
      <Route exact path="/confirm" component={Confirm} />
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default Routes;
