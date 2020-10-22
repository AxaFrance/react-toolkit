import * as React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Title from './Title';

const noop = () => {};
describe('<TabStateless>', () => {
  it('should render component', () => {
    const component = create(
      <Title onChange={noop} active>
        Title displayed
      </Title>
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render id click onCancel', () => {
    const onChange = jest.fn();
    const wrapper = mount(
      <Title active onChange={onChange}>
        header
      </Title>
    );
    wrapper.find('button').simulate('click', {});
    expect(onChange).toHaveBeenCalledWith({ id: '' });
  });
});
