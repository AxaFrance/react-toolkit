import React from 'react';
import { mount } from 'enzyme';

import Tabs from './Tabs';

const wrapper = mount(
  <Tabs>
    <Tabs.Tab title="My first title">Content of my first tab</Tabs.Tab>
    <Tabs.Tab title="My second title">Content of my second tab</Tabs.Tab>
  </Tabs>
);

describe('<Tabs /> With children', () => {
  it('renders structure', () => {
    expect(wrapper.find('.af-tabs').exists()).toBe(true);
  });
});
