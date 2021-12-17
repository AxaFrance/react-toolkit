import React from 'react';
import { render } from '@testing-library/react';
import Icon from '../Icon';

describe('<Icon>', () => {
  it('should render a sante icon', () => {
    const { asFragment } = render(<Icon icon="sante" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
