import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './NavBar';

const Custom = () => <div>Custom</div>;

const createWrapper = customProps => {
  const defaultProps = {
    isVisible: true,
    onClick: () => {},
    id: 'mainmenu',
    toggleMenuId: 'togglemenu',
    onFocus: () => {},
    onBlur: () => {},
    handleKeys: () => {},
    children: <Custom />,
  };
  const actualProps = Object.assign(defaultProps, customProps);
  return shallow(<NavBar {...actualProps} />);
};
describe('NavBar', () => {
  it('Display children', () => {
    const wrapper = createWrapper();
    expect(wrapper.find(Custom)).toHaveLength(1);
  });

  it('Should state isMenuFocused be true when menu is focused', () => {
    const wrapper = createWrapper();
    wrapper.simulate('focus');
    expect(wrapper.state().isMenuFocused).toBe(true);
  });

  describe('Rendered child', () => {
    it(' classModifier : initial child classModifier is kept if menu not active', () => {
      const wrapper = createWrapper();
      wrapper.setState({ position: 0, isMenuFocused: false });
      const renderedChild = wrapper.instance().renderChild(<Custom classModifier="mod" />, 1);
      expect(renderedChild.props.classModifier).toEqual("mod");
    });
    it(' classModifier : initial child classModifier is kept if menu active', () => {
      const wrapper = createWrapper();
      wrapper.setState({ position: 1, isMenuFocused: true });
      const renderedChild = wrapper.instance().renderChild(<Custom classModifier="mod" />, 1);
      expect(renderedChild.props.classModifier).toEqual("mod active");
    });
    it(' hasFocus : state isMenuFocused is true, current position', () => {
      const wrapper = createWrapper();
      wrapper.setState({ position: 1, isMenuFocused: true });
      const renderedChild = wrapper.instance().renderChild(<Custom />, 1);
      expect(renderedChild.props.hasFocus).toBe(true);
    });
    it(' not has focus : state isMenuFocused is false', () => {
      const wrapper = createWrapper();
      wrapper.setState({ position: 1, isMenuOpen: false });
      const renderedChild = wrapper.instance().renderChild(<Custom />, 1);
      expect(renderedChild.props.hasFocus).toBe(false);
    });
    it(' not has focus : position is not current position', () => {
      const wrapper = createWrapper({ hasFocus: true });
      wrapper.setState({ position: 2, isMenuOpen: true });
      const renderedChild = wrapper.instance().renderChild(<Custom />, 1);
      expect(renderedChild.props.hasFocus).toBe(false);
    });
  });

  describe('handlekey', () => {
    it('Call onBlur when keydown Escape', () => {
      const onBlur = jest.fn();
      const wrapper = createWrapper({ children: <Custom /> });
      wrapper.instance().onBlur = onBlur;
      wrapper.instance().handleKeys('Escape');
      expect(onBlur).toHaveBeenCalled();
    });
    it('Call onBlur when keydown ArrowRight', () => {
      const moveBykey = jest.fn();
      const wrapper = createWrapper({
        children: [<Custom />, <Custom />, <Custom />],
      });
      wrapper.instance().moveBykey = moveBykey;
      wrapper.instance().handleKeys('ArrowRight');
      expect(moveBykey).toHaveBeenCalled();
    });
    it('Call onBlur when keydown ArrowLeft', () => {
      const moveBykey = jest.fn();
      const wrapper = createWrapper({
        children: [<Custom />, <Custom />, <Custom />],
      });
      wrapper.instance().moveBykey = moveBykey;
      wrapper.instance().handleKeys('ArrowLeft');
      expect(moveBykey).toHaveBeenCalled();
    });
  });

  describe('Others functions', () => {
    it('Call onFocus() , isMenuFocused state is true', () => {
      const wrapper = createWrapper();
      wrapper.setState({ isMenuFocused: false });
      wrapper.instance().onFocus();
      expect(wrapper.state().isMenuFocused).toBe(true);
    });
    it('Call onBlur() , isMenuFocused state is false', () => {
      const wrapper = createWrapper();
      wrapper.setState({ isMenuFocused: true });
      wrapper.instance().onBlur();
      expect(wrapper.state().isMenuFocused).toBe(false);
    });
    it('Call moveBykey() , position has changed', () => {
      const wrapper = createWrapper({
        children: [<Custom />, <Custom />, <Custom />],
      });
      wrapper.setState({ position: 0 });
      wrapper.instance().moveBykey('ArrowRight');
      expect(wrapper.state().position).toEqual(1);
    });
  });
});
