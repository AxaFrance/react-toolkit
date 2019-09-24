import Home from './Home';
import fetchDevis from './Home.service';

import React, {useState, useEffect} from 'react';
import withCustomFetch from '../withCustomFetch';
import withLoader from "../withLoader";

const HomeWithLoader = withLoader(Home);

const HomeContainer = (props) => {
  const { fetch } = props;

  const [state, setState]  = useState({
     loading: true,
     items: []
   });

  useEffect(() => {
     const init = async () => {
       const items = await fetchDevis(fetch)();
       setState({
         loading: false,
         items: items
       });
     };
     init();
   },[]);

    return (<HomeWithLoader {...state} />);

};

export default withCustomFetch(fetch)(HomeContainer);
