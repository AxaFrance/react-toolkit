import { compose } from 'recompose';
import { withEnvironment } from './EnvironmentProvider';
import React from 'react';

const customFetch = fetch => apiBaseUrl => async (path, config) => {
  const url = apiBaseUrl.replace("{path}", path)
  const response = await fetch(url, config);
  return response.json();
};

const withCustomFetch = fetch => Component => props => (
  <Component
    {...props}
    fetch={customFetch(fetch)(props.environment.apiBaseUrl)}
  />
);

export default (fetch = undefined) =>
  compose(
    withEnvironment,
    withCustomFetch(fetch)
  );
