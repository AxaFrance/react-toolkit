import React from 'react';
import { render, screen } from '@testing-library/react';
import HeaderBase from '../HeaderBase';

describe('<HeaderBase>', () => {
  it('should render header', () => {
    const { asFragment } = render(<HeaderBase>content</HeaderBase>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should apply class and modifier', () => {
    render(
      <HeaderBase className="className" classModifier="modifier">
        content
      </HeaderBase>
    );
    expect(screen.getByText('content')).toHaveClass(
      'className',
      'className--modifier'
    );
  });
});
