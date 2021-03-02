import React from 'react';
import { render } from '@testing-library/react';
import TabStateless from '../TabsStateless';
import Tab from '../Tab';

describe('<TabStateless>', () => {
  it('should render component', () => {
    const { asFragment } = render(
      <TabStateless
        onChange={jest.fn()}
        className="className"
        activeIndex="1"
        classModifier="withIcon">
        <Tab title="title tab1" classModifier="modifier 1">
          <span>Content</span>
        </Tab>
        <Tab title="title tab2" classModifier="modifier">
          <span>Content</span>
        </Tab>
        <Tab title="title tab3" classModifier="modifier 1">
          <span>Content</span>
        </Tab>
      </TabStateless>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
