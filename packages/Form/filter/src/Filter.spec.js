import React from 'react';
import { shallow } from 'enzyme';

import Filter from '.';

describe('<Filter />', () => {
  it('renders without crashing', () => {
    shallow(<Filter />);
  });
});
