import React from 'react';
import { render } from '@testing-library/react';

import Status from '..';

describe('<Status />', () => {
  it('renders without crashing', () => {
    render(<Status />);
  });
});
