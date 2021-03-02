import React, { ComponentProps } from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Header from './Header';

const setup = (props: Omit<ComponentProps<typeof Header>, 'children'>) => {
  const utils = render(<Header {...props}>Header</Header>);
  return { ...utils };
};

describe('Accordion.Header', () => {
  it('renders Accordion.Header correctly', () => {
    const { asFragment } = setup({});
    expect(asFragment()).toMatchSnapshot();
  });

  [
    { isOpen: true, glyphicon: 'glyphicon-menu-up' },
    { isOpen: false, glyphicon: 'glyphicon-menu-down' },
  ].forEach(({ isOpen, glyphicon }) => {
    it('should have the correct icon depending on state open / close', () => {
      const onToggle = jest.fn();
      const { container } = setup({ isOpen, onToggle });
      const icon = container.querySelector('span');

      expect(icon).toHaveClass(glyphicon);
    });
  });

  it('should call onToggle when user click on the header', async () => {
    const onToggle = jest.fn();
    const { getByRole } = setup({ isOpen: false, onToggle });
    const header = getByRole('link');

    await header.click();

    await waitFor(() => {
      expect(onToggle).toHaveBeenCalled();
    });
  });

  it('should call onToggle when user use keyboard ArrowDown / ArrowUp key on the header', async () => {
    const onToggle = jest.fn();
    const { getByRole } = setup({ isOpen: false, onToggle });
    const header = getByRole('link');

    await header.focus();
    await fireEvent.keyDown(header, { key: 'ArrowDown', keyCode: 40 });
    await fireEvent.keyDown(header, { key: 'ArrowUp', keyCode: 38 });

    await waitFor(() => {
      expect(onToggle).toHaveBeenCalledTimes(2);
    });
  });

  it('should not call onToggle when user use an other key than ArrowDown / ArrowUp on the header', async () => {
    const onToggle = jest.fn();
    const { getByRole } = setup({ isOpen: false, onToggle });
    const header = getByRole('link');

    await header.focus();
    await fireEvent.keyDown(header, { key: 'A', keyCode: 66 });

    await waitFor(() => {
      expect(onToggle).not.toHaveBeenCalled();
    });
  });
});
