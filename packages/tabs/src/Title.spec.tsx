import * as React from 'react';
import Title from './Title';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';

const noop = () => {};
describe('<TabStateless>', () => {
  it('should render component', () => {
    const component = create(
      <Title onChange={noop} active={true}>
        Title displayed
      </Title>
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render id click onCancel', () => {
    const onChange = jest.fn();
    const wrapper = mount(
      <Title active={true} onChange={onChange}>
        header
      </Title>
    );
    wrapper.find('button').simulate('click', {});
    expect(onChange).toHaveBeenCalledWith({ id: '' });
  });
});
