import React from 'react';
import { render } from '@testing-library/react';

import FilterInline from '../FilterInline';

describe('<FilterInline />', () => {
  it('renders without crashing', () => {
    const { asFragment } = render(<FilterInline />);
    expect(asFragment()).toMatchSnapshot();
  });
});
