import * as React from 'react';
import { shallow } from 'enzyme';

import Title from '.';

describe('<Title />', () => {
  it('renders without crashing', () => {
    shallow(<Title />);
  });
});
