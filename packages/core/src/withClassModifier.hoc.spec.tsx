import React from 'react';
import { mount } from 'enzyme';
import withClassModifier, { WithClassModifierOptions } from './withClassModifier.hoc';

const CLASS_TEST = 'af-class-test';
const CLASS_MODIFIER = 'blue';

const MyComponent: React.SFC<WithClassModifierOptions> = ({ className }) => (
  <span className={className}>My component</span>
);

const Enhanced = withClassModifier(MyComponent);

describe('HOC withClassDefault', () => {
  it(`Should have className "${CLASS_TEST}"`, () => {
    const props = {className:CLASS_TEST};
    const wrapper = mount(<Enhanced {...props}  />);
    expect(wrapper.prop('className')).toEqual(CLASS_TEST);
  });
  it(`Should have className "${CLASS_TEST}" with modifier "${CLASS_TEST}--${CLASS_MODIFIER}"`, () => {
    const props = {className:CLASS_TEST, classModifier:CLASS_MODIFIER};
    const wrapper = mount(<Enhanced {...props} />);
    const expectedClassName = `${CLASS_TEST} ${CLASS_TEST}--${CLASS_MODIFIER}`;
    expect(wrapper.find(MyComponent).prop('className')).toEqual(expectedClassName);
  });
});
