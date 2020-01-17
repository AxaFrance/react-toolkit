import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import PageNotFound from 'NotFound';
import Confirm from './Confirm';
import New from './New';

const Routes = () => {
  const { url } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${url}/new`} component={New} />
      <Route exact path={`${url}/confirm`} component={Confirm} />
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default Routes;
