import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import HeaderCore from './HeaderCore';

describe('<HeaderCore', () => {
  it('should render header', () => {
    const component = create(
      <HeaderCore onCancel={jest.fn()}>Title</HeaderCore>
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render id click onCancel', () => {
    const onCancel = jest.fn();
    const wrapper = mount(<HeaderCore onCancel={onCancel}>Title</HeaderCore>);
    wrapper.find('button').simulate('click', {});
    expect(onCancel).toBeCalled();
  });
});
