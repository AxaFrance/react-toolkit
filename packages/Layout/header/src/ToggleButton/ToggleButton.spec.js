import React from 'react';
import { shallow } from 'enzyme';
import ToggleButton from '.';

const createWrapper = customProps => {
  const defaultProps = {
    idControl: 'idctrl',
  };
  const actualProps = Object.assign(defaultProps, customProps);
  return shallow(
    <ToggleButton {...actualProps}>
      <button type="button">bouton</button>
    </ToggleButton>
  );
};

describe('ToggleButton', () => {
  it('Children has aria-controls property', () => {
    const idControl = 'test';
    const wrapper = createWrapper({ idControl });
    const child = wrapper.find('button');
    expect(child.prop('aria-controls')).toEqual(idControl);
  });
  it('Children has aria-haspopup property', () => {
    const wrapper = createWrapper();
    const child = wrapper.find('button');
    expect(child.prop('aria-haspopup')).toBe(true);
  });
});
