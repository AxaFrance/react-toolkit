import React from 'react';
import { shallow } from 'enzyme';
import NavBarItem from './NavBarItem';

const Custom = () => <div>Custom</div>;

const createWrapper = (customProps) => {
  const defaultProps = {
    label: 'Home',
    href: '/home',
    tabIndex: '0',
    role: 'menuitem',
    hasFocus: false,
    handleKeys: () => {},
    children: null,
    actionElt: <a href="">Test</a>,
  };
  const actualProps = Object.assign(defaultProps, customProps);
  return shallow(<NavBarItem {...actualProps} />);
};

describe('NavBarItem', () => {
  describe('handlekey', () => {
    let closeMenu;
    let moveBykey;
    let wrapper;
    let openMenu;

    beforeEach(() => {
      wrapper = createWrapper({ children: <Custom /> });
      closeMenu = jest.fn();
      moveBykey = jest.fn();
      openMenu = jest.fn();

      wrapper.instance().openMenu = openMenu;
      wrapper.instance().closeMenu = closeMenu;
      wrapper.instance().moveBykey = moveBykey;
    });

    it('Does nothing when not have children', () => {
      const emptyWrapper = createWrapper();
      emptyWrapper.instance().closeMenu = closeMenu;
      emptyWrapper.instance().moveBykey = moveBykey;
      emptyWrapper.instance().handleKeys({ key: 'ArrowRight' });
      expect(closeMenu).not.toHaveBeenCalled();
      expect(moveBykey).not.toHaveBeenCalled();
    });

    it('Call closeMenu when keydown ArrowRight', () => {
      wrapper.instance().handleKeys({ key: 'ArrowRight' });
      expect(closeMenu).toHaveBeenCalled();
    });
    it('Call closeMenu when keydown ArrowLeft', () => {
      wrapper.instance().handleKeys({ key: 'ArrowLeft' });
      expect(closeMenu).toHaveBeenCalled();
    });

    it('Call closeMenu when keydown Escape', () => {
      wrapper.instance().handleKeys({ key: 'Escape' });
      expect(closeMenu).toHaveBeenCalled();
    });

    it('key: ArrowDown, menu is not open : open menu', () => {
      wrapper.setState({ isMenuOpen: false });
      wrapper.instance().handleKeys({ key: 'ArrowDown', stopPropagation() {} });
      expect(openMenu).toHaveBeenCalled();
      expect(moveBykey).not.toHaveBeenCalled();
    });

    it('key: ArrowDown, menu is open : move focus', () => {
      wrapper.setState({ isMenuOpen: true });
      wrapper.instance().handleKeys({ key: 'ArrowDown', stopPropagation() {} });
      expect(openMenu).not.toHaveBeenCalled();
      expect(moveBykey).toHaveBeenCalled();
    });

    it('key: ArrowUp, menu is open, position = 0 : open menu', () => {
      wrapper.setState({ isMenuOpen: true, position: 0 });
      wrapper.instance().handleKeys({ key: 'ArrowUp', stopPropagation() {} });
      expect(closeMenu).toHaveBeenCalled();
      expect(moveBykey).not.toHaveBeenCalled();
    });

    it('key: ArrowUp, menu is open, position != 0: move focus', () => {
      wrapper.setState({ isMenuOpen: true, position: 1 });
      wrapper.instance().handleKeys({ key: 'ArrowUp', stopPropagation() {} });
      expect(closeMenu).not.toHaveBeenCalled();
      expect(moveBykey).toHaveBeenCalled();
    });
  });

  describe('Rendered child', () => {
    it(' hasFocus : parent has focus, menu open, current position', () => {
      const wrapper = createWrapper({ hasFocus: true });
      wrapper.setState({ position: 1, isMenuOpen: true });
      const renderedChild = wrapper.instance().renderChild(<Custom />, 1);
      expect(renderedChild.props.hasFocus).toBe(true);
    });
    it(' not has focus : parent does not have focus', () => {
      const wrapper = createWrapper({ hasFocus: false });
      wrapper.setState({ position: 1, isMenuOpen: true });
      const renderedChild = wrapper.instance().renderChild(<Custom />, 1);
      expect(renderedChild.props.hasFocus).toBe(false);
    });
    it(' not has focus : position is not current position', () => {
      const wrapper = createWrapper({ hasFocus: true });
      wrapper.setState({ position: 2, isMenuOpen: true });
      const renderedChild = wrapper.instance().renderChild(<Custom />, 1);
      expect(renderedChild.props.hasFocus).toBe(false);
    });
    it(' not has focus : menu closed', () => {
      const wrapper = createWrapper({ hasFocus: true });
      wrapper.setState({ position: 1, isMenuOpen: false });
      const renderedChild = wrapper.instance().renderChild(<Custom />, 1);
      expect(renderedChild.props.hasFocus).toBe(false);
    });
  });

  describe('Others functions', () => {
    it('Call closeMenu() , isMenuOpen state is false', () => {
      const wrapper = createWrapper();
      wrapper.setState({ isMenuOpen: true });
      wrapper.instance().closeMenu();
      expect(wrapper.state().isMenuOpen).toBe(false);
    });
    it('Call openMenu() , isMenuOpen state is true and have children', () => {
      const wrapper = createWrapper({ children: <Custom /> });
      wrapper.setState({ isMenuOpen: false });
      wrapper.instance().openMenu();
      expect(wrapper.state().isMenuOpen).toBe(true);
    });
    it('Do nothing, isMenuOpen state is true and not have children', () => {
      const wrapper = createWrapper();
      wrapper.setState({ isMenuOpen: false });
      wrapper.instance().openMenu();
      expect(wrapper.state().isMenuOpen).toBe(false);
    });
    it('Call moveBykey() , position has changed', () => {
      const wrapper = createWrapper({ children: [<Custom />, <Custom />] });
      wrapper.setState({ position: 0 });
      wrapper.instance().moveBykey('ArrowDown');
      expect(wrapper.state().position).toEqual(1);
    });
    it('Does renderChildren, when not have children', () => {
      const wrapper = createWrapper();
      const renderedChildren = wrapper.instance().renderChildren();
      expect(renderedChildren).toEqual(null);
    });
  });
});
