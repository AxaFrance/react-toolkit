import React from 'react';
import { render } from '@testing-library/react';
import { Header } from '../Header/index';

describe('<Header>', () => {
  it('renders Header correctly', () => {
    const { asFragment } = render(<Header>test</Header>);
    expect(asFragment()).toMatchSnapshot();
  });
});
