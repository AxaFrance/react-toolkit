import React from 'react';
import { shallow } from 'enzyme';

import List from '.';

describe('<List />', () => {
  it('renders without crashing', () => {
    shallow(<List />);
  });
});
