import compose from './compose';
import { withEnvironment } from './EnvironmentProvider';
import React from 'react';

const customFetch = fetch => apiBaseUrl => async (path, config) => {
  const url = apiBaseUrl.replace("{path}", path);
  const response = await fetch(url, config);
  return response.json();
};

const withCustomFetch = fetch => Component => ({environment, ...otherProps}) => {
  console.log(fetch, environment, Component );
  return (
  <Component
    {...otherProps}
    fetch={customFetch(fetch)(environment.apiUrl)}
  />
);
  };

export default (fetch = undefined) =>
  compose(
    withEnvironment,
    withCustomFetch(fetch)
  );
