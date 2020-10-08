import React from 'react';
import Tabs from '@axa-fr/react-toolkit-tabs';
import Badge from '@axa-fr/react-toolkit-badge';
import Readme from '@axa-fr/react-toolkit-tabs/README.md';

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

const Template = args => (
  <Tabs {...args}>
    <Tabs.Tab
      title={TabTitleIconLeft}
      classModifier="has-icon-left"
      disabled={false}>
      Content of my first tab
    </Tabs.Tab>
    <Tabs.Tab title={TabTitleIconRight} classModifier="has-icon-right" disabled>
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
