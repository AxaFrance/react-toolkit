import React, { ComponentProps } from 'react';
import { fireEvent, render } from '@testing-library/react';
import NavBar from '../NavBar/NavBar';
import NavBarItem from '../NavBar/NavBarItem';

const createWrapper = (
  customProps?: Partial<ComponentProps<typeof NavBar>> & { [key: string]: any }
) => {
  const defaultProps = {
    isVisible: true,
    onClick: () => {},
    children: <NavBarItem actionElt={<div>CustomTest</div>} />,
  };
  const actualProps = Object.assign(defaultProps, customProps);
  return render(<NavBar {...actualProps} />);
};
describe('NavBar', () => {
  it('Display children', () => {
    const { getByText } = createWrapper();
    expect(getByText('CustomTest')).toBeInTheDocument();
  });

  it('Should state isMenuFocused be true when menu is focused', () => {
    const { getByRole, debug } = createWrapper();
    fireEvent.focus(getByRole('menubar'));
    debug();
    expect(getByRole('menubar')).toHaveClass('af-nav__list--focused');
  });

  describe('Rendered child', () => {
    it(' classModifier : initial child classModifier is kept if menu not active', () => {
      const { getByText } = createWrapper({
        children: (
          <NavBarItem classModifier="mod" actionElt={<div>Custom</div>} />
        ),
      });
      expect(getByText('Custom').parentElement).toHaveClass(
        'af-nav__item--mod'
      );
    });
    it(' classModifier : initial child classModifier is kept if menu active', () => {
      const { getByRole, getByText } = createWrapper({
        children: (
          <NavBarItem classModifier="mod" actionElt={<div>Custom</div>} />
        ),
      });
      getByRole('menubar').focus();
      expect(getByText('Custom').parentElement).toHaveClass(
        'af-nav__item--mod'
      );
      expect(getByText('Custom').parentElement).toHaveClass(
        'af-nav__item--active'
      );
    });
  });

  describe('handlekey', () => {
    it('Call onBlur when keydown Escape', () => {
      const { getByRole } = createWrapper({
        children: <NavBarItem actionElt={<div>Custom</div>} />,
      });
      getByRole('menubar').focus();
      fireEvent.keyDown(getByRole('menubar'), {
        key: 'Escape',
        code: 'Escape',
      });
      expect(getByRole('menubar')).not.toHaveClass('af-nav__list--focused');
    });
    it('Call onBlur when keydown ArrowRight', () => {
      const { getByRole, getByTestId, debug } = createWrapper({
        children: [
          <NavBarItem actionElt={<div>Custom</div>} />,
          <NavBarItem actionElt={<div>Custom</div>} data-testid="2nd-custom" />,
          <NavBarItem actionElt={<div>Custom</div>} />,
        ],
      });
      getByRole('menubar').focus();
      fireEvent.keyDown(getByRole('menubar'), {
        key: 'ArrowRight',
        code: 'ArrowRight',
      });
      debug();
      expect(getByTestId('2nd-custom').parentElement).toHaveClass(
        'af-nav__item--active'
      );
    });
    it('Call onBlur when keydown ArrowLeft', () => {
      const { getByRole, getByTestId } = createWrapper({
        children: [
          <NavBarItem actionElt={<div>Custom</div>} />,
          <NavBarItem actionElt={<div>Custom</div>} data-testid="2nd-custom" />,
          <NavBarItem actionElt={<div>Custom</div>} />,
        ],
      });
      fireEvent.keyDown(getByRole('menubar'), {
        key: 'ArrowRight',
        code: 'ArrowRight',
      });
      fireEvent.keyDown(getByRole('menubar'), {
        key: 'ArrowRight',
        code: 'ArrowRight',
      });
      fireEvent.keyDown(getByRole('menubar'), {
        key: 'ArrowLeft',
        code: 'ArrowLeft',
      });
      expect(getByTestId('2nd-custom').parentElement).toHaveClass(
        'af-nav__item--active'
      );
    });
  });
});
