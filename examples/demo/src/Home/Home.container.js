import Home from './Home';
import fetchDevis from './Home.service';
import { LoaderModes } from '@axa-fr/react-toolkit-all';
import {
  lifecycle,
  compose,
  withStateHandlers,
  setDisplayName,
  withProps
} from 'recompose';

const withInitState = lifecycle({
  state: {
    loading: true,
    items: []
  }
});

const withInitData = withStateHandlers(() => ({}), {
  init: (state, props) => items => ({
    items,
    loading: false
  })
});

const withFetchData = lifecycle({
  componentDidMount() {
    const { init } = this.props;
    fetchDevis().then(items => init(items));
  }
});

const withLoaderMode = withProps(({ loading }) => ({
  loaderMode: loading ? LoaderModes.get : LoaderModes.none
}));

const enhance = compose(
  setDisplayName('EnhancedHome'),
  withInitState,
  withInitData,
  withFetchData,
  withLoaderMode
);

export default enhance(Home);
