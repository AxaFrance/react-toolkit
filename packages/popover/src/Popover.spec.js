import React from 'react';
import { shallow } from 'enzyme';
import PopoverPlacements from './PopoverPlacements';
import Popover, { PopoverClick, PopoverOver } from './Popover';

const createWrapperPopover = customProps => {
  const defaultProps = {
    placement: PopoverPlacements.right,
    classModifier: '',
    className: '',
    mode: 'click',
  };
  const actualProps = Object.assign(defaultProps, customProps);
  return shallow(<Popover {...actualProps} />);
};

describe('<Popover />', () => {
  it('Should contain PopoverClick element', () => {
    const wrapper = createWrapperPopover();
    expect(wrapper.find('PopoverClick').length).toBe(1);
  });
  it('Should contain PopoverOver element', () => {
    const wrapper = createWrapperPopover({ mode: 'hover' });
    expect(wrapper.find('PopoverOver').length).toBe(1);
  });
});

const createWrapperPopoverClick = customProps => {
  const defaultProps = {
    placement: PopoverPlacements.right,
    classModifier: '',
    className: '',
  };
  const actualProps = Object.assign(defaultProps, customProps);
  return shallow(<PopoverClick {...actualProps} />);
};

describe('<PopoverClick />', () => {
  it('Should contain PopoverBase element', () => {
    const wrapper = createWrapperPopoverClick();
    expect(wrapper.find('PopoverBase').length).toBe(1);
  });
  it('PopoverClick accept placement props', () => {
    const wrapper = createWrapperPopoverClick({ placement: 'left' });
    expect(wrapper.instance().props.placement).toBe('left');
  });
});

const createWrapperPopoverOver = customProps => {
  const defaultProps = {
    placement: PopoverPlacements.right,
    classModifier: '',
    className: '',
  };
  const actualProps = Object.assign(defaultProps, customProps);
  return shallow(<PopoverOver {...actualProps} />);
};

describe('<PopoverOver />', () => {
  it('Should contain PopoverBase element', () => {
    const wrapper = createWrapperPopoverOver();
    expect(wrapper.find('PopoverBase').length).toBe(1);
  });
  it('PopoverOver accept placement props', () => {
    const wrapper = createWrapperPopoverOver({ placement: 'left' });
    expect(wrapper.instance().props.placement).toBe('left');
  });
  it('Should isOpen State equal TRUE when enter have been called', () => {
    const wrapper = createWrapperPopoverOver();
    wrapper.instance().enter();
    expect(wrapper.state().isOpen).toBe(true);
  });
  it('Should isOpen State equal FALSE when leave have been called', () => {
    const wrapper = createWrapperPopoverOver();
    wrapper.instance().leave();
    expect(wrapper.state().isOpen).toBe(false);
  });
});
