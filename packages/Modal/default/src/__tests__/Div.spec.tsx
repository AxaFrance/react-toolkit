import React from 'react';
import { render } from '@testing-library/react';
import Div from '../Div';

describe('<Div>', () => {
  it('should render div', () => {
    const { asFragment } = render(<Div>content</Div>);
    expect(asFragment()).toMatchSnapshot();
  });
});
