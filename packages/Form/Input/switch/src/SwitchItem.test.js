import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SwitchItem from './SwitchItem';

Enzyme.configure({ adapter: new Adapter() });

const createWrapper = (customProps) => {
  const defaultProps = {
    name: 'testSwitchItem',
    value: '0',
    disabled: false,
    readOnly: false,
    onChange: () => {},
  };
  const actualProps = Object.assign(defaultProps, customProps);
  return mount(<SwitchItem {...actualProps} />);
};

describe('SwitchItem', () => {
  it('Verify input exist', () => {
    const wrapper = createWrapper();
    expect(wrapper.find('.af-form__input-radio').exists()).toBe(true);
  });
  it('Verify input name', () => {
    const wrapper = createWrapper();
    expect(wrapper.find('.af-form__input-radio').prop('name')).toEqual(
      'testSwitchItem'
    );
  });
  it('Set props value', () => {
    const wrapper = createWrapper();
    wrapper.setProps({ value: '1' });
    expect(wrapper.props().value).toEqual('1');
  });
  it('Verify label exist', () => {
    const wrapper = createWrapper();
    expect(wrapper.find('.af-form__label')).toHaveLength(1);
  });
});
