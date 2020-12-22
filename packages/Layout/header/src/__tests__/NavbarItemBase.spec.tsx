import React, { Component, ComponentProps } from 'react';
import { fireEvent, render } from '@testing-library/react';
import { NavBarItemBase, handleLinkFocus } from '../NavBar/NavBarItemBase';

const Custom = () => <div>Custom</div>;
// eslint-disable-next-line react/prefer-stateless-function
class Link extends Component {
  render() {
    return <a href="#" {...this.props} />;
  }
}

const createWrapper = (
  customProps?: Partial<ComponentProps<typeof NavBarItemBase>>
) => {
  const defaultProps = {
    label: 'Home',
    href: '/home',
    tabIndex: 0,
    role: 'menuitem',
    hasFocus: false,
    handleKeys: () => {},
    isMenuOpen: false,
    position: 0,
    actionElt: <a href="#">Test</a>,
  };
  const actualProps = Object.assign(defaultProps, customProps);
  return render(<NavBarItemBase {...actualProps} />);
};

describe('NavBarItemBase', () => {
  it('Onkeydown call handleKey', () => {
    const handleKeys = jest.fn();
    const { getByRole } = createWrapper({ handleKeys });
    fireEvent.keyDown(getByRole('none'), {
      key: 'ArrowDown',
      code: 'ArrowDown',
    });
    expect(handleKeys).toHaveBeenCalled();
  });

  describe('Open class item', () => {
    it('When item hasFocus & menu is open & have children, item has `af-nav__item--open` class ', () => {
      const { getByRole } = createWrapper({
        hasFocus: true,
        isMenuOpen: true,
        children: <Custom />,
      });
      expect(getByRole('none')).toHaveClass('af-nav__item--open');
    });
    it('When item not hasFocus & menu is open & have children, item doesnt have `af-nav__item--open` class ', () => {
      const { container } = createWrapper({
        hasFocus: false,
        isMenuOpen: true,
        children: <Custom />,
      });
      expect(container).not.toHaveClass('af-nav__item--open');
    });
    it('When item hasFocus & menu is close & have children, item doesnt have `af-nav__item--open` class ', () => {
      const { container } = createWrapper({
        hasFocus: true,
        isMenuOpen: false,
        children: <Custom />,
      });
      expect(container).not.toHaveClass('af-nav__item--open');
    });
    it('When item hasFocus & menu is open & doesnt have children, item doesnt have `af-nav__item--open` class ', () => {
      const { container } = createWrapper({
        hasFocus: true,
        isMenuOpen: true,
      });
      expect(container).not.toHaveClass('af-nav__item--open');
    });
  });

  // TODO `handleLinkFocus` tests should be decoupled from `NavBarItemBase``
  // implementation (unit tests)
  describe('handleLinkFocus', () => {
    xit('linkToFocusOn exist & hasFocus is true & menu close ', () => {
      const { baseElement, container, debug } = createWrapper({
        actionElt: <Link>Test</Link>,
      });
      debug(container);
      handleLinkFocus(baseElement, true, false);
      // expect(container).toHaveClass('af-nav__item');
      expect(container).toHaveFocus();
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
      const { container } = createWrapper({ onBlur, onFocus });

      handleLinkFocus(container, false, true);
      expect(onBlur).not.toHaveBeenCalled();
      expect(onFocus).not.toHaveBeenCalled();
    });
    it('linkToFocusOn not exist & hasFocus is false & menu close ', () => {
      const onBlur = jest.fn();
      const onFocus = jest.fn();
      createWrapper({ onBlur, onFocus });

      handleLinkFocus(null, false, false);
      expect(onBlur).not.toHaveBeenCalled();
      expect(onFocus).not.toHaveBeenCalled();
    });
  });
});
