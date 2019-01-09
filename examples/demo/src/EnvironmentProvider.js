import React from 'react';
import { Loader } from '@axa-fr/react-toolkit-all';

const EnvironmentContext = React.createContext();

export const EnvironmentConsumer = EnvironmentContext.Consumer;

export const withEnvironment = Component => props => (
  <EnvironmentConsumer>
    {store =>
      !store.environment ? (
        <Loader> </Loader>
      ) : (
        <Component {...props} {...store} />
      )
    }
  </EnvironmentConsumer>
);

export default class EnvironmentProvider extends React.Component {
  state = {
    environment: null
  };
  async componentDidMount() {
    let fileName =
      process.env.NODE_ENV === 'development'
        ? 'environment.dev.json'
        : 'environment.json';
        const data = await fetch(`/${fileName}`);
        const variables = await data.json();
        this.setState({ environment: variables });
  }
  render() {
    return (
      <EnvironmentContext.Provider value={this.state}>
        {this.props.children}
      </EnvironmentContext.Provider>
    );
  }
}
