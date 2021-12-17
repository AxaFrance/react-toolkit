import React from 'react';
import { render } from '@testing-library/react';

import List from '..';

describe('<List />', () => {
  it('renders without crashing', () => {
    render(<List />);
  });
});
