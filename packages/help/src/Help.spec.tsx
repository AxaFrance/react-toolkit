import React from 'react';
import { mount, shallow } from 'enzyme';
import Popover from '@axa-fr/react-toolkit-popover';
import EnhancedHelp from './Help.container';
import Help from './Help';

/* Render Component with enhanced ************************************ */
describe('<Help> Render', () => {
  it('Should render Help component', () => {
    const component = shallow(<Help>Hello</Help>);

    expect(component).toMatchSnapshot();
    expect(component.find(Popover.Pop)).toBeDefined();
    expect(component.find(Popover.Pop).html()).toBe('Hello');
    expect(component.find(Popover.Over)).toBeDefined();
  });
});

/* Container ********************************************************* */
describe('<Help> container', () => {
  it('Should className Help equal to "myclass myclass--modifier" , When mounted component use HOC enhance', () => {
  const wrapper = mount(
      <EnhancedHelp className="myclass" classModifier="modifier">
        <div>HelpMock</div>
      </EnhancedHelp>
    );

    expect(wrapper).toBeDefined();

    expect(wrapper.find(Help).prop('className')).toBe(
      'myclass myclass--modifier'
    );
  });
});
