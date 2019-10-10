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
    items: items.map(i => {

      const dateSplit = i.begin.split('/');
      return { ...i, fullName : `${i.firstname} ${i.lastname}`, beginDate : new Date(dateSplit[2], dateSplit[1], dateSplit[0])
      };
    })
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
        fullName : { value: null, timeLastUpdate : null},
        type: { value: null, timeLastUpdate : null},
        agent: { value: null, timeLastUpdate : null},
        beginDate: { value: null, timeLastUpdate : null}
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

    setState({
      ...state,
      filters : {
        ...state.filters,
        columns

         }});
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
/*
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
}*/

const HomeContainer = ({ fetch }) => {
  const { state, onChangePaging, onChangeFilter } = useHome(fetch);

  const itemsSorted = [...state.items].sort((itemA, itemB) => {
    const columns = state.filters.columns;
    const entries = [];
    for (let [key, value] of Object.entries(columns)) {
      entries.push({key, value});
    }
    entries.sort((a, b) => {
      if(a.value.timeLastUpdate === b.value.timeLastUpdate){
        return 0;
      }

      if(a.value.timeLastUpdate === null){
        return 1;
      }

      if(b.value.timeLastUpdate === null){
        return -1;
      }

      return a.value.timeLastUpdate - b.value.timeLastUpdate;
    });
    for (let i = 0; i < entries.length; i++) {

      const entry = entries[i];
      if(columns[entry.key].value === "asc") {
        if(itemB[entry.key] && itemA[entry.key] ) {

          if(itemB[entry.key] instanceof Date){
            return itemA[entry.key].getTime() - itemB[entry.key].getTime();
          }
          const localComp = itemA[entry.key].localeCompare(itemB[entry.key]);
          if (localComp !== 0) {
            return localComp;
          }
        }
      }
      if(columns[entry.key].value === "desc") {
        if(itemB[entry.key] && itemA[entry.key] ) {
          if(itemB[entry.key] instanceof Date){
            return itemB[entry.key].getTime() - itemA[entry.key].getTime();
          }
          const localComp = itemB[entry.key].localeCompare(itemA[entry.key]);
          if (localComp !== 0) {
            return localComp;
          }
        }
      }
    }

   return 0;
  });

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

export default compose(
  withCustomFetch(fetch),
  withRouter)(HomeContainer);
