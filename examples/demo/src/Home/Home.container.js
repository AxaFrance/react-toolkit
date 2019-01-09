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
import withCustomFetch from '../withCustomFetch';

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
  async componentDidMount() {
    const { init, fetch } = this.props;
    const items = await fetchDevis(fetch)();
    init(items);
  }
});

const withLoaderMode = withProps(({ loading }) => ({
  loaderMode: loading ? LoaderModes.get : LoaderModes.none
}));

const enhance = compose(
  setDisplayName('EnhancedHome'),
  withInitState,
  withInitData,
  withCustomFetch(fetch),
  withFetchData,
  withLoaderMode
);

export default enhance(Home);
