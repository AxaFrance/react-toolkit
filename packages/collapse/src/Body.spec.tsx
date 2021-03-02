import React, { ComponentProps } from 'react';
import { render } from '@testing-library/react';
import Body from './Body';

const setup = (props: Omit<ComponentProps<typeof Body>, 'children'>) => {
  const utils = render(<Body {...props}>Body</Body>);
  return { ...utils };
};

describe('Accordion.Body', () => {
  it('renders Accordion.Body correctly', () => {
    const { asFragment } = setup({ classModifier: 'class' });
    expect(asFragment()).toMatchSnapshot();
  });

  [
    { isOpen: true, className: 'af-accordion__collapse--open' },
    { isOpen: false, className: 'af-accordion__collapse--close' },
  ].forEach(({ isOpen, className }) => {
    it('should have open / close class depending on isOpen', () => {
      const { container } = setup({ isOpen });
      expect(container.firstChild).toHaveClass(className);
    });
  });
});
