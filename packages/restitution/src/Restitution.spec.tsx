import * as React from 'react';
import { shallow } from 'enzyme';

import Restitution from '.';

describe('<Restitution />', () => {
  it('renders without crashing', () => {
    shallow(<Restitution label="test" value="test" />);
  });
});
