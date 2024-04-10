import React from 'react';
import { render, screen } from '@testing-library/react';
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

  it('Button mask toggle menu', async () => {
    const toggleClick = jest.fn();
    const { getByRole } = createWrapper({ onClick: toggleClick });

    const btn = getByRole('button', { name: 'Open Menu' });
    await userEvent.click(btn);
    expect(toggleClick).toHaveBeenCalled();
  });

  it('Button cross toggle menu', async () => {
    const toggleClick = jest.fn();
    const { getByRole } = createWrapper({ onClick: toggleClick });
    const btn = getByRole('button', { name: 'Close Menu' });
    await userEvent.click(btn);
    expect(toggleClick).toHaveBeenCalled();
  });

  it('Call onFocus when menu has focused', async () => {
    const onFocus = jest.fn();
    const { getByRole } = createWrapper({ onFocus });
    const menu = getByRole('menubar');
    expect(menu).not.toHaveFocus();

    await userEvent.tab();
    await userEvent.tab();
    await userEvent.tab();

    expect(onFocus).toHaveBeenCalled();
  });

  it('Tabindex to 0 on default first element', () => {
    const { getByRole } = createWrapper();
    const customElt = getByRole('menubar').children[0];
    expect(customElt).toHaveAttribute('tabindex', '0');
  });

  /* I don't think those tests are relevant, keeping them to track
  Especially considering the fact the we used "FocusTrap" which is not available anymore
  and standard users can't focus on the element otherwise, so the test reflected more
  a technical test than users being able to call those functions


  it('Call onBlur when menu has unfocused', async () => {
    const onBlur = jest.fn();
    const { container } = createWrapper({ onBlur });
    const menu = screen.getByRole('menubar');

    await userEvent.tab();
    await userEvent.tab();
    await userEvent.tab();
    userEvent.click(container);
    expect(menu).toHaveFocus();
    expect(onBlur).toHaveBeenCalled();
  });

  it('Call handleKeys when keydown', async () => {
    const handleKeys = jest.fn();
    createWrapper({ handleKeys });

    await userEvent.tab();
    await userEvent.tab();
    await userEvent.tab();
    await userEvent.keyboard('{ArrowDown}{ArrowRight}');

    expect(handleKeys).toHaveBeenCalled();
  });
  */

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
