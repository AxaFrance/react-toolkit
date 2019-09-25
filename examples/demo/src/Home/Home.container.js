import Home from './Home';
import fetchDevis from './Home.service';

import React, {useState, useEffect} from 'react';
import withCustomFetch from '../withCustomFetch';
import withLoader from "../withLoader";
import {withRouter} from "react-router-dom";

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

  const onClick = (e) => {
    e.preventDefault();
    history.push('/new');
  };

  return (<HomeWithLoader {...state} onClick={onClick} />);
};

export default withCustomFetch(fetch)(withRouter(HomeContainer));
