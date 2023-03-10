import React from 'react';
import { render, screen } from '@testing-library/react';
import HeaderClientApp from '../HeaderClientApp';

describe('HeaderClientApp', () => {
  it('should render children', () => {
    render(
      <HeaderClientApp
        leftChildren={<p>gauche</p>}
        rightChildren={<p>droite</p>}>
        A title
      </HeaderClientApp>
    );
    expect(screen.getByText(/A title/)).toBeInTheDocument();
    expect(screen.getByText(/gauche/)).toBeInTheDocument();
    expect(screen.getByText(/droite/)).toBeInTheDocument();
  });

  it('should have default class', () => {
    render(<HeaderClientApp>A title</HeaderClientApp>);
    expect(screen.getByText(/A title/)).toHaveClass('afc-header-app', {
      exact: true,
    });
  });

  it('should have custom class', () => {
    render(<HeaderClientApp className="custom-class">A title</HeaderClientApp>);
    expect(screen.getByText(/A title/)).toHaveClass('custom-class', {
      exact: true,
    });
  });

  it('should have custom class with modifier', () => {
    render(
      <HeaderClientApp className="custom-class" classModifier="modifier">
        A title
      </HeaderClientApp>
    );

    expect(screen.getByText(/A title/)).toHaveClass(
      'custom-class custom-class--modifier',
      {
        exact: true,
      }
    );
  });

  it('should not have classModifier attribute', () => {
    render(
      <HeaderClientApp className="custom-class" classModifier="modifier">
        A title
      </HeaderClientApp>
    );

    expect(screen.getByText(/A title/)).not.toHaveAttribute('classModifier');
  });
});
