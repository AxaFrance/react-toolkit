import React from 'react';
import { mount, shallow } from 'enzyme';
import outy from 'outy';
import PopoverBase, { AnimatedPopover } from './PopoverBase';
import PopoverPlacements from './PopoverPlacements';

const createWrapper = customProps => {
  const defaultProps = {
    isOpen: true,
    placement: PopoverPlacements.right,
    classModifier: '',
    className: '',
  };
  const actualProps = Object.assign(defaultProps, customProps);
  return mount(
    <div id="youhou">
      <PopoverBase {...actualProps}>
        <PopoverBase.Pop>
          <h1>Contenu qui va reçevoir la popover</h1>
          <p>text de la modal</p>
        </PopoverBase.Pop>
        <PopoverBase.Over>
          Bouton d'exemple
          <button type="button" id="idbouton">
            Bouton d'exemple
          </button>
        </PopoverBase.Over>
      </PopoverBase>
    </div>
  );
};

describe('<PopoverBase />', () => {
  it('Target click throw onToggle event', () => {
    const toggleClick = jest.fn();
    const wrapper = createWrapper({ onToggle: toggleClick });
    const button = wrapper.find('#idbouton');
    button.simulate('click');
    expect(toggleClick).toHaveBeenCalled();
  });
  it('Should contain AnimatedPopover element', () => {
    const wrapper = createWrapper();
    expect(wrapper.find('AnimatedPopover').length).toBe(1);
  });
});

const createWrapperAnimatedPopover = customProps => {
  const defaultProps = {
    target: <div className="targetElement">Target Over</div>,
    placement: 'top',
    isOpen: false,
    className: '',
    classModifier: '',
    onToggle: () => '',
    onOutsideTap: null,
    children: <div>Content</div>,
  };
  const actualProps = Object.assign(defaultProps, customProps);
  return mount(<AnimatedPopover {...actualProps} />);
};

jest.mock('outy');

describe('<AnimatedPopover />', () => {
  it('Should contain Manager and Reference elements', () => {
    const wrapper = createWrapperAnimatedPopover();
    expect(wrapper.find('Manager').length).toBe(1);
    expect(wrapper.find('Reference').length).toBe(1);
  });

  it('Should contain Popper element When isOpen props is true', () => {
    const wrapper = createWrapperAnimatedPopover({ isOpen: true });
    expect(wrapper.find('Manager').length).toBe(1);
    expect(wrapper.find('Reference').length).toBe(1);
    expect(wrapper.find('Popper').length).toBe(1);
  });

  it('Should Reference contain Target element', () => {
    const wrapper = createWrapperAnimatedPopover();
    expect(wrapper.find('Reference').find('.targetElement').length).toBe(1);
  });

  it('Should outsideTap.remove called when setOusideTap called', () => {
    const mockRemove = jest.fn();
    const wrapper = createWrapperAnimatedPopover();
    const instance = wrapper.instance();
    instance.outsideTap = {
      remove: mockRemove,
    };
    instance.setOusideTap();
    expect(mockRemove).toHaveBeenCalled();
  });

  it('Should outy module function called when setOusideTap called', () => {
    const mockOuty = jest.fn();
    const wrapper = createWrapperAnimatedPopover();
    const instance = wrapper.instance();
    outy.mockImplementation(mockOuty);
    instance.setOusideTap();
    expect(mockOuty).toHaveBeenCalled();
  });

  it('Should outsideTap.remove called when component unmounted called', () => {
    const mockRemove = jest.fn();
    const wrapper = createWrapperAnimatedPopover({ onOutsideTap: true });
    const instance = wrapper.instance();
    instance.outsideTap = {
      remove: mockRemove,
    };
    wrapper.unmount();
    expect(mockRemove).toHaveBeenCalled();
  });
  it('Should setOusideTap called when any isOpen props changed', () => {
    const mockSetOusideTap = jest.fn();
    const wrapper = createWrapperAnimatedPopover({ onOutsideTap: true });
    const instance = wrapper.instance();
    instance.setOusideTap = mockSetOusideTap;
    wrapper.setProps({ isOpen: true });
    setTimeout(() => {
      expect(mockSetOusideTap).toHaveBeenCalled();
    }, 200);
  });
});
