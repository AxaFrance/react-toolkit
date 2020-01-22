import Home from './Home';
import fetchDevis from './Home.service';

import React, {useEffect, useReducer} from 'react';
import withCustomFetch from '../withCustomFetch';
import withLoader from '../withLoader';
import {computeNumberPages, filterPaging, getItemsSorted} from "./Home.filters";

const HomeWithLoader = withLoader(Home);

const init = (fetch, dispatch) => async () => {
  const items = await fetchDevis(fetch)();
  dispatch({type: "init", data :{items}});
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'init' :
      const { items } = action.data;
      return {
        ...state,
        loading: false,
        items: items.map(i => {
          const dateSplit = i.begin.split('/');
          return { ...i, fullName : `${i.firstname} ${i.lastname}`, beginDate : new Date(dateSplit[2], dateSplit[1], dateSplit[0])
          };
        })
      };
    case 'onChangePaging':
      const {numberItems, page} = action.data;
      return{
        ...state,
        filters : {
          ...state.filters,
          paging: {
            numberItemsByPage: numberItems,
            currentPage: page,
          }}};
    case 'onChangeFilter':
      const {propertyName} = action.data;
      const columns = {...state.filters.columns};
      const property = columns[propertyName];
      const value = property.value;
      if(value === null) {
        property.value = "desc";
        property.timeLastUpdate = (new Date()).getTime();
      } else if(value === "desc"){
        property.value = "asc";
      } else{
        property.value = null;
        property.timeLastUpdate = null;
      }
      return {
        ...state,
        filters : {
          ...state.filters,
          columns

        }};
    default:
      throw new Error();
  }
};

const initialState = {
  loading: true,
  items: [],
  filters: {
    paging: {
      numberItemsByPage: 10,
      currentPage: 1,
    },
    columns :{
      fullName : { value: null, timeLastUpdate : null},
      type: { value: null, timeLastUpdate : null},
      agent: { value: null, timeLastUpdate : null},
      beginDate: { value: null, timeLastUpdate : null}
    }
  }
};

const useHome = fetch => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const onChangePaging = ({numberItems, page}) => {
    dispatch({type: "onChangePaging", data: { numberItems, page}});
  };
  const onChangeFilter = (propertyName) => {
    dispatch({type: "onChangeFilter", data: { propertyName}});
  };
  useEffect(() => {
    init(fetch, dispatch)();
  }, []);
  return { state, onChangePaging, onChangeFilter };
};

export const HomeContainer = ({ fetch }) => {
  const { state, onChangePaging, onChangeFilter } = useHome(fetch);
  const itemsSorted = getItemsSorted(state.items, state.filters.columns);
  const numberPages = computeNumberPages(itemsSorted, state.filters.paging.numberItemsByPage);
  const currentPage = state.filters.paging.currentPage;
  const filters = {
      ...state.filters,
      paging : {
        ...state.filters.paging,
        numberPages,
        currentPage : currentPage > numberPages ? numberPages : currentPage
      }
  };
  const items = filterPaging(itemsSorted, state.filters.paging.numberItemsByPage, filters.paging.currentPage);

  return (<HomeWithLoader {...state} numberItemsTotal={state.items.length} items={items} filters={filters} onChangePaging={onChangePaging} onChangeFilter={onChangeFilter} />);
};

export default withCustomFetch(fetch)(HomeContainer);
