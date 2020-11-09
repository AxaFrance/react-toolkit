import React from 'react';
import { render, screen } from '@testing-library/react';
import Body from '../Body';

describe('<Body>', () => {
  it('should render component', () => {
    const { asFragment } = render(<Body>content</Body>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should apply class and modifier', () => {
    render(
      <Body className="className" classModifier="modifier">
        content
      </Body>
    );
    expect(screen.getByText('content')).toHaveClass(
      'className',
      'className--modifier'
    );
  });
});
