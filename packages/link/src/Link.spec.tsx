import React from 'react';
import { shallow } from 'enzyme';

import Link from '.';

describe('<Link />', () => {
  it('renders without crashing', () => {
    shallow(<Link />);
  });
});
