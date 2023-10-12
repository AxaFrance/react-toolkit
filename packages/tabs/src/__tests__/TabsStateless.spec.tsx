import React from 'react';
import { render, screen } from '@testing-library/react';
import TabStateless from '../TabsStateless';
import Tab from '../Tab';

describe('<TabStateless>', () => {
  it('should render component', () => {
    render(
      <TabStateless
        onChange={jest.fn()}
        className="className"
        activeIndex="1"
        classModifier="withIcon">
        <Tab title="title tab1" classModifier="modifier 1">
          <span>Content 1</span>
        </Tab>
        <Tab title="title tab2" classModifier="modifier">
          <span>Content 2</span>
        </Tab>
        <Tab title="title tab3" classModifier="modifier 1">
          <span>Content 3</span>
        </Tab>
      </TabStateless>
    );
    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });
});
