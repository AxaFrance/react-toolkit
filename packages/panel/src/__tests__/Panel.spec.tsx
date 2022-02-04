import React from 'react';
import { render } from '@testing-library/react';

import Panel from '..';

describe('<Panel />', () => {
  it('renders without crashing', () => {
    render(<Panel />);
  });
});
