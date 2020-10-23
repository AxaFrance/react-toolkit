import React from 'react';
import { mount } from 'enzyme';
import Tabs from './Tabs';

describe('Tabs', () => {
  it('should display tab content when user clicks on tab link', () => {
    const wrapper = mount(
      <Tabs>
        <Tabs.Tab title="Title 1">Content 1</Tabs.Tab>
        <Tabs.Tab title="Title 2">Content 2</Tabs.Tab>
      </Tabs>
    );

    expect(wrapper.find('.af-tabs__content').text()).toBe('Content 1');

    const secondTabLink = wrapper.find('button').at(1);
    secondTabLink.simulate('click');

    expect(wrapper.find('.af-tabs__content').text()).toBe('Content 2');
  });

  it('should display the tab specified by activeIndex prop', () => {
    const wrapper = mount(
      <Tabs activeIndex="0">
        <Tabs.Tab title="Title 1">Content 1</Tabs.Tab>
        <Tabs.Tab title="Title 2">Content 2</Tabs.Tab>
      </Tabs>
    );

    expect(wrapper.find('.af-tabs__content').text()).toBe('Content 1');

    const secondTabLink = wrapper.find('button').at(1);
    secondTabLink.simulate('click');

    expect(wrapper.find('.af-tabs__content').text()).toBe('Content 2');
  });

  it('should display the second tab specified by activeIndex prop', () => {
    const wrapper = mount(
      <Tabs activeIndex="1">
        <Tabs.Tab title="Title 1">Content 1</Tabs.Tab>
        <Tabs.Tab title="Title 2">Content 2</Tabs.Tab>
      </Tabs>
    );

    expect(wrapper.find('.af-tabs__content').text()).toBe('Content 2');

    const secondTabLink = wrapper.find('button').at(0);
    secondTabLink.simulate('click');

    expect(wrapper.find('.af-tabs__content').text()).toBe('Content 1');
  });
});
