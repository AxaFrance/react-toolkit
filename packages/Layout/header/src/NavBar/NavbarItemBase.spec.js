import React from 'react';
import { shallow, mount } from 'enzyme';
import { NavBarItemBase, handleLinkFocus } from './NavBarItemBase';

const Custom = () => <div>Custom</div>;

const createWrapper = (customProps, useMount = false) => {
  const defaultProps = {
    label: 'Home',
    href: '/home',
    tabIndex: '0',
    role: 'menuitem',
    hasFocus: false,
    handleKeys: () => {},
    children: null,
    isMenuOpen: false,
    position: 0,
    actionElt: <a href="">Test</a>,
  };
  const actualProps = Object.assign(defaultProps, customProps);
  return (useMount ? mount : shallow)(<NavBarItemBase {...actualProps} />);
};

describe('NavBarItemBase', () => {
  it('Onkeydown call handleKey', () => {
    const handleKeys = jest.fn();
    const wrapper = createWrapper({ handleKeys });
    wrapper.simulate('keydown', {
      key: 'ArrowDown',
      preventDefault: () => {},
    });
    expect(handleKeys).toHaveBeenCalled();
  });

  describe('Open class item', () => {
    it('When item hasFocus & menu is open & have children, item has `af-nav__item--open` class ', () => {
      const wrapper = createWrapper({
        hasFocus: true,
        isMenuOpen: true,
        children: <Custom />,
      });
      expect(wrapper.hasClass('af-nav__item--open')).toBe(true);
    });
    it('When item not hasFocus & menu is open & have children, item doesnt have `af-nav__item--open` class ', () => {
      const wrapper = createWrapper({
        hasFocus: false,
        isMenuOpen: true,
        children: <Custom />,
      });
      expect(wrapper.hasClass('af-nav__item--open')).toBe(false);
    });
    it('When item hasFocus & menu is close & have children, item doesnt have `af-nav__item--open` class ', () => {
      const wrapper = createWrapper({
        hasFocus: true,
        isMenuOpen: false,
        children: <Custom />,
      });
      expect(wrapper.hasClass('af-nav__item--open')).toBe(false);
    });
    it('When item hasFocus & menu is open & doesnt have children, item doesnt have `af-nav__item--open` class ', () => {
      const wrapper = createWrapper({
        hasFocus: true,
        isMenuOpen: true,
      });
      expect(wrapper.hasClass('af-nav__item--open')).toBe(false);
    });
  });

  // TODO `handleLinkFocus` tests should be decoupled from `NavBarItemBase``
  // implementation (unit tests)
  describe('handleLinkFocus', () => {
    it('linkToFocusOn exist & hasFocus is true & menu close ', () => {
      const onFocus = jest.fn();
      const wrapper = createWrapper({}, true);
      wrapper.focus = onFocus;
      handleLinkFocus(wrapper, true, false);
      expect(onFocus).toHaveBeenCalled();
    });
    // TODO investigate what this test is supposed to do (and why it's not
    // working)
    /*     
    it('linkToFocusOn exist & hasFocus is false & menu close ', () => {
      const onBlur = jest.fn();
      const wrapper = createWrapper({}, true);
      wrapper.blur = onBlur;
      handleLinkFocus(wrapper, false, false);
      expect(onBlur).toHaveBeenCalled();
    });
    */
    it('linkToFocusOn exist & hasFocus is false & menu open ', () => {
      const onBlur = jest.fn();
      const onFocus = jest.fn();
      const wrapper = createWrapper({}, true);
      wrapper.blur = onBlur;
      wrapper.focus = onBlur;
      handleLinkFocus(wrapper, false, true);
      expect(onBlur).not.toHaveBeenCalled();
      expect(onFocus).not.toHaveBeenCalled();
    });
    it('linkToFocusOn not exist & hasFocus is false & menu close ', () => {
      const onBlur = jest.fn();
      const onFocus = jest.fn();
      const wrapper = createWrapper({}, true);
      wrapper.blur = onBlur;
      wrapper.focus = onBlur;
      handleLinkFocus(null, false, false);
      expect(onBlur).not.toHaveBeenCalled();
      expect(onFocus).not.toHaveBeenCalled();
    });
  });
});
