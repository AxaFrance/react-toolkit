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
    items: items,
    filters:{
      numberItems : 10,
      currentPage: 1,
    }
  });
};

const useHome = fetch => {
  const [state, setState] = useState({
    loading: true,
    items: []
  });
  useEffect(() => {
    init(fetch, setState)();
  }, []);
  return state;
};

const HomeContainer = ({ fetch, history }) => {
  const state = useHome(fetch);

  return (<HomeWithLoader {...state} />);
};

export default compose(
  withCustomFetch(fetch),
  withRouter)(HomeContainer);
