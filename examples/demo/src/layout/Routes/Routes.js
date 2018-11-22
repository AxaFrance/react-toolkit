import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../Home';
import New from '../../New';
import Confirm from '../../Confirm';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/new" component={New} />
      <Route exact path="/confirm" component={Confirm} />
    </Switch>
  );
};

export default Routes;
