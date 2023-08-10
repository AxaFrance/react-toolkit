import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('<Footer>', () => {
  it('should render footer', () => {
    render(<Footer>content</Footer>);
    expect(screen.getByText('content')).toBeInTheDocument();
  });

  it('should apply class and modifier', () => {
    render(
      <Footer className="className" classModifier="modifier">
        content
      </Footer>
    );
    expect(screen.getByText('content')).toHaveClass(
      'className',
      'className--modifier'
    );
  });
});
