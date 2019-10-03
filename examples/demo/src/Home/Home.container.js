import Home from './Home';
import fetchDevis from './Home.service';

import React, {useState, useEffect} from 'react';
import withCustomFetch from '../withCustomFetch';
import withLoader from '../withLoader';
import compose from '../compose';
import {withRouter} from 'react-router-dom';

const HomeWithLoader = withLoader(Home);

const init = (fetch, setState) => async () => {
  const items = await fetchDevis(fetch)();
  setState({
    loading: false,
    items: items
  });
};

const HomeContainer = ({ fetch, history }) => {
  const [state, setState]  = useState({
     loading: true,
     items: []
   });
  useEffect(() => {
    init(fetch, setState)();
  }, []);

  return (<HomeWithLoader {...state} />);
};

export default compose(
  withCustomFetch(fetch),
  withRouter)(HomeContainer);
