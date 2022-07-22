import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NavBarBase from '../NavBar/NavBarBase';

const Custom = (_props: { tabIndex?: number }) => <div {..._props}>Custom</div>;

const createWrapper = (customProps?: any) => {
  const defaultProps = {
    isVisible: true,
    onClick: () => {},
    id: 'idelt',
    toggleMenuId: 'menuid',
    isMenuFocused: true,
    onFocus: () => {},
    onBlur: () => {},
    handleKeys: () => {},
  };
  const actualProps = Object.assign(defaultProps, customProps);
  return render(
    <NavBarBase {...actualProps}>
      <Custom tabIndex={0} />
      <Custom />
      <Custom />
    </NavBarBase>
  );
};

describe('NavBarBase', () => {
  it('Display children', () => {
    const { getByRole } = createWrapper();
    expect(getByRole('menubar').children).toHaveLength(3);
  });

  it('Button mask toggle menu', () => {
    const toggleClick = jest.fn();
    const { getByRole } = createWrapper({ onClick: toggleClick });

    const btn = getByRole('button', { name: 'Open Menu' });
    userEvent.click(btn);
    expect(toggleClick).toHaveBeenCalled();
  });

  it('Button cross toggle menu', () => {
    const toggleClick = jest.fn();
    const { getByRole } = createWrapper({ onClick: toggleClick });
    const btn = getByRole('button', { name: 'Close Menu' });
    userEvent.click(btn);
    expect(toggleClick).toHaveBeenCalled();
  });

  it('Call onFocus when menu has focused', () => {
    const onFocus = jest.fn();
    const { getByRole } = createWrapper({ onFocus });
    const menu = getByRole('menubar');
    expect(menu).not.toHaveFocus();

    userEvent.tab();
    userEvent.tab();
    userEvent.tab();

    expect(onFocus).toHaveBeenCalled();
  });

  it('Tabindex to 0 on default first element', () => {
    const { getByRole } = createWrapper();
    const customElt = getByRole('menubar').children[0];
    expect(customElt).toHaveAttribute('tabindex', '0');
  });

  it('Call onBlur when menu has unfocused', () => {
    const onBlur = jest.fn();
    const { getByRole, container } = createWrapper({ onBlur });
    const menu = getByRole('menubar');

    userEvent.tab({ focusTrap: menu });
    userEvent.click(container);
    expect(onBlur).toHaveBeenCalled();
  });

  it('Call handleKeys when keydown', () => {
    const handleKeys = jest.fn();
    const { getByRole } = createWrapper({ handleKeys });

    userEvent.tab({ focusTrap: getByRole('menubar') });
    userEvent.keyboard('{ArrowDown}{ArrowRight}');

    expect(handleKeys).toHaveBeenCalled();
  });

  it('When menu is visible, mask button has `show` class ', () => {
    const { getByRole } = createWrapper();
    const mask = getByRole('button', { name: 'Open Menu' });
    expect(mask).toHaveClass('show');
  });

  it('When menu is not visible, mask button not has `show` class ', () => {
    const { getByRole } = createWrapper({ isVisible: false });
    const mask = getByRole('button', { name: 'Open Menu' });
    expect(mask).not.toHaveClass('show');
  });
});
