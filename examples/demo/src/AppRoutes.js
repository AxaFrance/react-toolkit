import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Quote from './Quote';
import PageNotFound from './NotFound';

const Routes = () => (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/quote" component={Quote} />
      <Route component={PageNotFound} />
    </Switch>
  );

export default Routes;
