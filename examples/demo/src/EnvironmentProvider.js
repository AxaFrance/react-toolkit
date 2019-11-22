import React, { createContext, useEffect, useState } from 'react';
import { Loader } from '@axa-fr/react-toolkit-all';

export const EnvironmentContext = createContext();

export const EnvironmentConsumer = EnvironmentContext.Consumer;

export const withEnvironment = Component => props => (
  <EnvironmentConsumer>
    {store => <Component {...props} {...store} />}
  </EnvironmentConsumer>
);

const getEnvironmentData = async () => {
  const fileName =
    process.env.NODE_ENV === 'development'
      ? 'environment.dev.json'
      : 'environment.json';
  const data = await fetch(`./${fileName}`);
  return data.json();
};

const EnvironmentProvider = ({ children }) => {
  const [environment, setEnvironment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEnvironmentData().then(data => {
      setEnvironment({ environment: data });
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <Loader mode="get" text="Loading..." />
      ) : (
        <EnvironmentContext.Provider value={environment}>
          {children}
        </EnvironmentContext.Provider>
      )}
    </>
  );
};

export default EnvironmentProvider;
