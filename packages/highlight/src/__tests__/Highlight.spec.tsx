import React from 'react';
import { render } from '@testing-library/react';
import Highlight from '..';

describe('<Highlight />', () => {
  it('renders without crashing', () => {
    render(<Highlight />);
  });
});
