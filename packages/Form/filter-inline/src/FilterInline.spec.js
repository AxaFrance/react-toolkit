import React from 'react';
import { shallow } from 'enzyme';

import FilterInline from '.';

describe('<FilterInline />', () => {
  it('renders without crashing', () => {
    shallow(<FilterInline />);
  });
});
