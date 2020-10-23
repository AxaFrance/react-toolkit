import React from 'react';
import { shallow } from 'enzyme';

import Highlight from '.';

describe('<Highlight />', () => {
  it('renders without crashing', () => {
    shallow(<Highlight />);
  });
});
