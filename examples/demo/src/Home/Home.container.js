import Home from './Home';
import fetchDevis from './Home.service';

import React, {useState, useEffect} from 'react';
import withCustomFetch from '../withCustomFetch';
import withLoader from '../withLoader';
import compose from '../compose';
import {withRouter} from 'react-router-dom';

const HomeWithLoader = withLoader(Home);

const init = (fetch, setState, state) => async () => {
  const items = await fetchDevis(fetch)();
  setState({
    ...state,
    loading: false,
    items: items
  });
};

const useHome = fetch => {
  const [state, setState] = useState({
    loading: true,
    items: [],
    filters: {
      paging: {
        numberItemsByPage: 10,
        currentPage: 1,
      },
      columns :{
        fullName : null,
        type: null,
        agent: null,
        startDate: null
      }
    }
  });

  const onChangePaging = ({numberItems, page}) => {
    setState({
      ...state,
      filters : {
        ...state.filters,
        paging: {
          numberItemsByPage: numberItems,
          currentPage: page,
      }}});
  };

  const onChangeFilter = (propertyName) => {

    /*state.filters.columns[propertyName]
    setState({
      ...state,
      filters : {
        ...state.filters,
         }});*/

  };

  useEffect(() => {
    init(fetch, setState, state)();
  }, []);
  return { state, onChangePaging, onChangeFilter };
};

export function filterPaging(items, numberItems, currentPage) {
  let pageIndex = 0;
  if (currentPage > 1) {
    pageIndex = currentPage - 1;
  }

  let controlledNumberItems = 0;
  if (numberItems > 0) {
    controlledNumberItems = numberItems;
  }

  const length = items.length;
  const beginIndex = pageIndex * controlledNumberItems;
  const lastIndex =
    length < beginIndex + controlledNumberItems
      ? length
      : beginIndex + controlledNumberItems;

  return items.slice(beginIndex, lastIndex);
}

export function computeNumberPages(items, numberItems) {
  if (!items) {
    return 1;
  }

  const numberItemsControlled = numberItems < 1 ? 1 : numberItems;
  const length = items.length;
  return length > 0 ? Math.ceil(length / numberItemsControlled) : 1;
}

export function filterText(items, filter, propertyName) {
  const controlledFilter = filter ? filter.toLocaleLowerCase() : filter;
  return items.reduce((acc, item) => {
    const matches =
      !controlledFilter ||
      item[propertyName].toLocaleLowerCase().indexOf(controlledFilter) !== -1;

    if (matches) {
      acc.push(item);
    }

    return acc;
  }, []);
}



const HomeContainer = ({ fetch }) => {
  const { state, onChangePaging, onChangeFilter } = useHome(fetch);

  const numberPages = computeNumberPages(state.items,state.filters.paging.numberItemsByPage);
  const currentPage = state.filters.paging.currentPage;
  const filters = {
      ...state.filters,
      paging : {
        ...state.filters.paging,
        numberPages,
        currentPage : currentPage > numberPages ? numberPages : currentPage
      }
  };

  const items = filterPaging(state.items, state.filters.paging.numberItemsByPage, filters.paging.currentPage);

  return (<HomeWithLoader {...state} numberItemsTotal={state.items.length} items={items} filters={filters} onChangePaging={onChangePaging} onChangeFilter={onChangeFilter} />);
};

export default compose(
  withCustomFetch(fetch),
  withRouter)(HomeContainer);
