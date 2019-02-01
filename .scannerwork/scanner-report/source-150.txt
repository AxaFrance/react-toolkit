import * as React from 'react';
import withClassDefault from './withClassDefault.hoc';
import { mount } from 'enzyme';

interface ComponentProps {
  className?: string;
}
const CLASS_TEST = 'af-class-test';

const MyComponent: React.SFC<ComponentProps> = ({ className }) => (
  <span className={className}>My component</span>
);
const enhance = withClassDefault(CLASS_TEST);
const Enhanced = enhance(MyComponent);

describe('HOC withClassDefault', () => {
  it(`Should have className ${CLASS_TEST}`, () => {
    const wrapper = mount(<Enhanced />);
    expect(wrapper.prop('className')).toEqual(CLASS_TEST);
  });
});
