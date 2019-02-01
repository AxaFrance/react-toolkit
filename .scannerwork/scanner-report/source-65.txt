import * as React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import Header from './Header';

describe('<Header>', () => {
  it('should render header', () => {
    const component = create(<Header title="title" onCancel={jest.fn()} />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render id click onCancel', () => {
    const onCancel = jest.fn();
    const wrapper = mount(<Header title="title" onCancel={onCancel} >header</Header>);
    wrapper.find('button').simulate('click', {});
    expect(onCancel).toHaveBeenCalledWith({ id: '' });
  });
});
