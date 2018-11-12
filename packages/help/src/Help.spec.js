import * as React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Help from './Help';
import {
  withInitState,
  setToggle,
  setOutsideTap,
  initialStateToggle,
} from './Help.container';

/* Render Component with enhanced ************************************ */
describe('<Help> Render', () => {
  it('Should render Help', () => {
    const component = create(<Help isOpen={Boolean(true)}>Hello</Help>);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});

/* Container ********************************************************* */
describe('<Help> container', () => {
  const EnhancedHelp = withInitState(Help);
  it('Should isOpen to be TRUE, When mounted component use HOC withInitState', () => {
    const wrapper = mount(<EnhancedHelp />);
    expect(wrapper).toBeDefined();
    expect(wrapper.find(Help).props().isOpen).toBe(false);
  });
});

/* Helpers *********************************************************** */
describe('<Help> Helpers', () => {
  it('Helper setToggle: when isOpen is TRUE return isOpen FALSE', () => {
    const stateMock = { isOpen: true };
    const result = setToggle(stateMock, null)();
    const expected = { isOpen: false };
    expect(result).toEqual(expected);
  });

  it('Helper setToggle: when isOpen is FALSE return isOpen TRUE', () => {
    const stateMock = { isOpen: false };
    const result = setToggle(stateMock, null)();
    const expected = { isOpen: true };
    expect(result).toEqual(expected);
  });
  it('Helper setOutsideTap: when called return isOpen FALSE', () => {
    const result = setOutsideTap(null, null)();
    const expected = { isOpen: false };
    expect(result).toEqual(expected);
  });
  it('Helper initialStateToggle: when receive isOpen return the same isOpen', () => {
    const stateMock = { isOpen: true };
    const result = initialStateToggle(stateMock);
    expect(result).toEqual(stateMock);
  });
});
