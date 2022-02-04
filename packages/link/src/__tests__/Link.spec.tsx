import React from 'react';
import { render } from '@testing-library/react';

import Link from '..';

describe('<Link />', () => {
  it('renders without crashing', () => {
    render(<Link />);
  });
});
