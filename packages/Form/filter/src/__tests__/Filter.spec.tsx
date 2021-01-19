import React from 'react';
import { render } from '@testing-library/react';

import Filter from '../Filter';

describe('<Filter />', () => {
  it('renders without crashing', () => {
    const { asFragment } = render(<Filter />);
    expect(asFragment()).toMatchSnapshot();
  });
});
