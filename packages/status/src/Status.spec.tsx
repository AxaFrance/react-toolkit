import React from 'react';
import { shallow } from 'enzyme';

import Status from '.';

describe('<Status />', () => {
  it('renders without crashing', () => {
    shallow(<Status />);
  });
});
