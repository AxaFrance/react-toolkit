import * as React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import Help from './Help';
import { enhance } from './Help.container';

/* Render Component with enhanced ************************************ */
describe('<Help> Render', () => {
  it('Should render Help component', () => {
    const component = create(<Help isOpen={Boolean(true)}>Hello</Help>);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});

/* Container ********************************************************* */
describe('<Help> container', () => {
  const HelpMock = () => <div>HelpMock</div>;
  const EnhancedHelp = enhance(HelpMock);
  it('Should className Help equal to "myclass myclass--modifier" , When mounted component use HOC enhance', () => {
    const wrapper = mount(
      <EnhancedHelp className="myclass" classModifier="modifier" />
    );

    expect(wrapper).toBeDefined();
    expect(wrapper.find(HelpMock).props().className).toBe(
      'myclass myclass--modifier'
    );
  });
});
