import React from 'react';
import { render } from '@testing-library/react';
import Badge from '../Badge';

describe('<Badge>', () => {
  it('should render component', () => {
    const { getByText } = render(<Badge>50</Badge>);
    expect(getByText('50')).toBeInTheDocument();
  });
});
