import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../Footer';

describe('<Footer>', () => {
  it('should render a footer with copyright prop as content', () => {
    const { asFragment } = render(<Footer copyright="Test" />);
    expect(asFragment()).toMatchSnapshot();
  });
  describe('toCoreProps', () => {
    it('should map copyright to children', () => {
      const { getByText, getByAltText } = render(<Footer copyright="test" />);

      expect(getByText('test')).toBeInTheDocument();
      expect(getByAltText('Logo Axa')).toBeInTheDocument();
    });
  });
});
