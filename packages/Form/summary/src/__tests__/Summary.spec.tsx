import React from 'react';
import { render } from '@testing-library/react';
import { Summary } from '..';

describe('<Summary>', () => {
  it('Renders correctly with default props', () => {
    const { asFragment } = render(<Summary />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Renders correctly when not visible', () => {
    const { asFragment } = render(<Summary isVisible={false} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Renders correctly when visible', () => {
    const messages = ['Sample message 1', '', 'Sample message 2', null];
    const { asFragment } = render(<Summary messages={messages} isVisible />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Renders correctly with ReactNode in messages', () => {
    const messages = [
      <span>Sample message 1</span>,
      '',
      'Sample message 2',
      null,
    ];
    const { asFragment } = render(<Summary messages={messages} isVisible />);
    expect(asFragment()).toMatchSnapshot();
  });
});
