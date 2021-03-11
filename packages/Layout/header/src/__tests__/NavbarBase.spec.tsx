import React from 'react';
import { shallow } from 'enzyme';
import NavBarBase from '../NavBar/NavBarBase';

const Custom = (_props: { tabIndex?: number }) => <div>Custom</div>;

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
  return shallow(
    <NavBarBase {...actualProps}>
      <Custom tabIndex={0} />
      <Custom />
      <Custom />
      {false && <Custom />}
    </NavBarBase>
  );
};

describe('NavBarBase', () => {
  it('Display children', () => {
    const wrapper = createWrapper();
    expect(wrapper.find('ul').children()).toHaveLength(3);
  });

  it('Button mask toggle menu', () => {
    const toggleClick = jest.fn();
    const wrapper = createWrapper({ onClick: toggleClick });

    const btn = wrapper.find('button.mask');
    btn.simulate('click');
    expect(toggleClick).toHaveBeenCalled();
  });

  it('Button cross toggle menu', () => {
    const toggleClick = jest.fn();
    const wrapper = createWrapper({ onClick: toggleClick });
    const btn = wrapper.find('button.af-nav__aside-close');
    btn.simulate('click');
    expect(toggleClick).toHaveBeenCalled();
  });

  it('Call onFocus when menu has focused', () => {
    const onFocus = jest.fn();
    const wrapper = createWrapper({ onFocus });
    const menu = wrapper.find('ul.af-nav__list');
    menu.simulate('focus');
    expect(onFocus).toHaveBeenCalled();
  });

  it('When menu focused, has class focused', () => {
    const wrapper = createWrapper();
    const menu = wrapper.find('ul.af-nav__list');
    expect(menu.hasClass('af-nav__list--focused')).toBe(true);
  });

  it('When menu not focused, not has class focused', () => {
    const wrapper = createWrapper({ isMenuFocused: false });
    const menu = wrapper.find('ul.af-nav__list');
    expect(menu.hasClass('af-nav__list--focused')).toBe(false);
  });

  it('Tabindex to 0 on default first element', () => {
    const wrapper = createWrapper();
    const customElts = wrapper.find(Custom);
    expect(customElts.get(0).props.tabIndex).toEqual(0);
  });

  it('Call onBlur when menu has unfocused', () => {
    const onBlur = jest.fn();
    const wrapper = createWrapper({ onBlur });
    const menu = wrapper.find('ul.af-nav__list');
    menu.simulate('blur');
    expect(onBlur).toHaveBeenCalled();
  });

  it('Call handleKeys when keydown', () => {
    const handleKeys = jest.fn();
    const wrapper = createWrapper({ handleKeys });
    const menu = wrapper.find('ul.af-nav__list');
    menu.simulate('keydown', {
      key: 'ArrowRight',
      preventDefault: () => {},
    });
    expect(handleKeys).toHaveBeenCalled();
  });

  it('When menu is visible, mask button has `show` class ', () => {
    const wrapper = createWrapper();
    const mask = wrapper.find('button.mask');
    expect(mask.hasClass('show')).toBe(true);
  });

  it('When menu is not visible, mask button not has `show` class ', () => {
    const wrapper = createWrapper({ isVisible: false });
    const mask = wrapper.find('button.mask');
    expect(mask.hasClass('show')).toBe(false);
  });
});
