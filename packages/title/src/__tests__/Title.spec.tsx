import React from 'react';
import { render, screen } from '@testing-library/react';
import Title from '../Title';

describe('Title', () => {
  it('should render children', () => {
    // Act
    render(<Title>A title</Title>);

    // Assert
    expect(
      screen.getByRole('heading', { name: /A title/, level: 2 })
    ).toBeInTheDocument();
  });

  it('should have default class', () => {
    // Act
    render(<Title>A title</Title>);

    // Assert
    expect(
      screen.getByRole('heading', { name: /A title/, level: 2 })
    ).toHaveClass('af-title', {
      exact: true,
    });
  });

  it('should have custom class', () => {
    // Act
    render(<Title className="custom-class">A title</Title>);

    // Assert
    expect(
      screen.getByRole('heading', { name: /A title/, level: 2 })
    ).toHaveClass('custom-class', {
      exact: true,
    });
  });

  it('should have custom class with modifier', () => {
    // Act
    render(
      <Title className="custom-class" classModifier="modifier">
        A title
      </Title>
    );

    // Assert
    expect(
      screen.getByRole('heading', { name: /A title/, level: 2 })
    ).toHaveClass('custom-class custom-class--modifier', {
      exact: true,
    });
  });

  it('should not have classModifier attribute', () => {
    // Act
    render(
      <Title className="custom-class" classModifier="modifier">
        A title
      </Title>
    );

    // Assert
    expect(
      screen.getByRole('heading', { name: /A title/, level: 2 })
    ).not.toHaveAttribute('classModifier');
  });

  it('should have correct heading level', () => {
    // Act
    render(<Title heading="h3">A title</Title>);

    // Assert
    expect(
      screen.getByRole('heading', { name: /A title/, level: 3 })
    ).toBeInTheDocument();
  });
});
