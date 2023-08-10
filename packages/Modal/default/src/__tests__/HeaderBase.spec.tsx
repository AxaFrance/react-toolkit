import React from 'react';
import { render, screen } from '@testing-library/react';
import HeaderBase from '../HeaderBase';

describe('<HeaderBase>', () => {
  it('should render header', () => {
    render(<HeaderBase>content</HeaderBase>);
    expect(screen.getByText('content')).toBeInTheDocument();
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
