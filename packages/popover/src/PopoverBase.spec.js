import React from 'react';
import { mount } from 'enzyme';
import PopoverBase from './PopoverBase';
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

describe('PopoverBase', () => {
  it('Target click throw onToggle event', () => {
    const toggleClick = jest.fn();
    const wrapper = createWrapper({ onToggle: toggleClick });
    const button = wrapper.find('#idbouton');
    button.simulate('click');
    expect(toggleClick).toHaveBeenCalled();
  });
});
