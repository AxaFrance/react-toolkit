import React, { AllHTMLAttributes, Component, ComponentProps } from 'react';
import { fireEvent, render } from '@testing-library/react';
import NavBarItem from '../NavBar/NavBarItem';

// eslint-disable-next-line react/prefer-stateless-function
class Custom extends Component<AllHTMLAttributes<HTMLDivElement>> {
  render() {
    return <div {...this.props}>Custom</div>;
  }
}

const createWrapper = (
  customProps?: Partial<ComponentProps<typeof NavBarItem>>
) => {
  const defaultProps = {
    label: 'Home',
    href: '/home',
    hasFocus: true,
    actionElt: <span>Test</span>,
  };
  const actualProps = Object.assign(defaultProps, customProps);
  return render(
    <ul>
      <NavBarItem {...actualProps} />
    </ul>
  );
};

describe('NavBarItem', () => {
  describe('handlekey', () => {
    it('Does nothing when not have children', () => {
      const { queryByRole } = createWrapper();
      expect(queryByRole('menu')).not.toBeInTheDocument();
    });

    it('Call closeMenu when keydown ArrowRight', () => {
      const { getByRole } = createWrapper({ children: <Custom /> });
      fireEvent.keyDown(getByRole('menuitem'), {
        key: 'ArrowRight',
        code: 'ArrowRight',
      });
      expect(getByRole('menuitem')).toHaveAttribute('aria-expanded', 'false');
    });
    it('Call closeMenu when keydown ArrowLeft', () => {
      const { getByRole } = createWrapper({ children: <Custom /> });
      fireEvent.keyDown(getByRole('menuitem'), {
        key: 'ArrowLeft',
        code: 'ArrowLeft',
      });
      expect(getByRole('menuitem')).toHaveAttribute('aria-expanded', 'false');
    });

    it('Call closeMenu when keydown Escape', () => {
      const { getByRole } = createWrapper({ children: <Custom /> });
      fireEvent.keyDown(getByRole('menuitem'), {
        key: 'Escape',
        code: 'Escape',
      });
      expect(getByRole('menuitem')).toHaveAttribute('aria-expanded', 'false');
    });

    it('key: ArrowDown, menu is not open : open menu', async () => {
      const { getByText } = createWrapper({
        children: [
          <NavBarItem actionElt={<Custom />} />,
          <NavBarItem actionElt={<Custom />} />,
        ],
      });
      const liElement = getByText('Test').parentElement;
      liElement.focus();
      expect(getByText('Test')).toHaveFocus();
      fireEvent.keyDown(liElement, {
        key: 'ArrowDown',
        code: 'ArrowDown',
      });
      expect(getByText('Test')).toHaveAttribute('aria-expanded', 'true');
    });

    it('key: ArrowDown, menu is open : move focus', () => {
      const { getByTestId, getByText } = createWrapper({
        children: [
          <NavBarItem actionElt={<Custom />} />,
          <NavBarItem data-testid="2nd-custom" actionElt={<Custom />} />,
        ],
      });
      const liElement = getByText('Test').parentElement;
      liElement.focus();
      fireEvent.keyDown(liElement, {
        key: 'ArrowDown',
        code: 'ArrowDown',
      });
      fireEvent.keyDown(liElement, {
        key: 'ArrowDown',
        code: 'ArrowDown',
      });
      expect(getByTestId('2nd-custom')).toHaveAttribute('tabindex', '0');
    });

    it('key: ArrowUp, menu is open, position = 0 : open menu', () => {
      const { getByRole, getByText } = createWrapper({ children: <Custom /> });
      const liElement = getByText('Test').parentElement;
      liElement.focus();
      fireEvent.keyDown(liElement, {
        key: 'ArrowDown',
        code: 'ArrowDown',
      });
      fireEvent.keyDown(liElement, { key: 'ArrowUp', code: 'ArrowUp' });
      expect(getByRole('menuitem')).toHaveAttribute('aria-expanded', 'false');
    });

    it('key: ArrowUp, menu is open, position != 0: move focus', () => {
      const { getByText, getByTestId } = createWrapper({
        children: [
          <NavBarItem data-testid="1st-custom" actionElt={<Custom />} />,
          <NavBarItem actionElt={<Custom />} />,
        ],
      });
      const liElement = getByText('Test').parentElement;
      liElement.focus();
      fireEvent.keyDown(liElement, {
        key: 'ArrowDown',
        code: 'ArrowDown',
      });
      fireEvent.keyDown(liElement, {
        key: 'ArrowDown',
        code: 'ArrowDown',
      });
      fireEvent.keyDown(liElement, { key: 'ArrowUp', code: 'ArrowUp' });
      expect(getByTestId('1st-custom')).toHaveAttribute('tabindex', '0');
      expect(getByTestId('1st-custom')).toHaveFocus();
    });
  });

  /* describe('Rendered child', () => {
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
  }); */
});
