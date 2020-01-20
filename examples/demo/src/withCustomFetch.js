import compose from './compose';
import { withEnvironment } from './EnvironmentProvider';
import { withAuthentication } from '@axa-fr/react-oidc-context-fetch';
import React from 'react';

const customFetch = fetch => apiBaseUrl => async (path, config) => {
  const url = apiBaseUrl.replace("{path}", path);
  const response = await fetch(url, config);
  return response.json();
};

const withCustomFetch = Component => ({environment, ...otherProps}) => (<Component
    {...otherProps}
    fetch={customFetch(otherProps.fetch)(environment.apiUrl)}
  />);

export default (fetch = undefined) =>
  compose(
    withEnvironment,
    withAuthentication(fetch),
    withCustomFetch
  );
