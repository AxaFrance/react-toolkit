import * as React from 'react';
import withClassModifier, { WithClassModifierOptions } from './withClassModifier.hoc';
import { mount } from 'enzyme';

const CLASS_TEST = 'af-class-test';
const CLASS_MODIFIER = 'blue';

const MyComponent: React.SFC<WithClassModifierOptions> = ({ className }) => (
  <span className={className}>My component</span>
);

const Enhanced = withClassModifier(MyComponent);

describe('HOC withClassDefault', () => {
  it(`Should have className "${CLASS_TEST}"`, () => {
    const wrapper = mount(<Enhanced className={CLASS_TEST} />);
    expect(wrapper.prop('className')).toEqual(CLASS_TEST);
  });
  it(`Should have className "${CLASS_TEST}" with modifier "${CLASS_TEST}--${CLASS_MODIFIER}"`, () => {
    const wrapper = mount(<Enhanced className={CLASS_TEST} classModifier={CLASS_MODIFIER} />);
    const expectedClassName = `${CLASS_TEST} ${CLASS_TEST}--${CLASS_MODIFIER}`;
    expect(wrapper.find(MyComponent).prop('className')).toEqual(expectedClassName);
  });
});
