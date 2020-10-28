import React from 'react';
import Badge from '@axa-fr/react-toolkit-badge';
import { Story } from '@storybook/react';
import Tabs from './Tabs';
import Readme from '../README.md';
import { TabsCoreProps } from './TabsCore';

export default {
  title: 'Tabs',
  component: Tabs,
  parameters: {
    readme: {
      sidebar: Readme,
    },
    options: {},
  },
  argTypes: {
    onChange: { action: 'tab changed' },
  },
};

const TabTitleIconLeft = (
  <span>
    <i className="glyphicon glyphicon-ok" /> Title with left icon
  </span>
);
const TabTitleIconRight = (
  <span>
    Title with right icon <i className="glyphicon glyphicon-facetime-video" />
  </span>
);
const TabTitleBadge = (
  <span>
    Title with badge <Badge classModifier="danger"> 42 </Badge>
  </span>
);
const TabTitleIconBadge = (
  <span>
    Title with badge and left icon
    <Badge classModifier="error"> Lorem ipsum </Badge>
    <i className="glyphicon glyphicon-facetime-video" />
  </span>
);

const Template: Story<TabsCoreProps> = (args) => (
  <Tabs {...args}>
    <Tabs.Tab title={TabTitleIconLeft} classModifier="has-icon-left">
      Content of my first tab
    </Tabs.Tab>
    <Tabs.Tab title={TabTitleIconRight} classModifier="has-icon-right">
      Content of my second tab
    </Tabs.Tab>
    <Tabs.Tab title={TabTitleBadge}>Content of my third tab </Tabs.Tab>
    <Tabs.Tab title={TabTitleIconBadge} classModifier="has-icon-left">
      Content of my fifth tab
    </Tabs.Tab>
  </Tabs>
);

export const Default = Template.bind({});
Default.args = {
  activeIndex: '1',
};
