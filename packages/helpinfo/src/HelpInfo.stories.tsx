import React from 'react';
import { Meta, Story } from '@storybook/react';
import { PopoverPlacements, PopoverModes } from '@axa-fr/react-toolkit-popover';
import Button from '@axa-fr/react-toolkit-button';
import Badge from '@axa-fr/react-toolkit-badge';
import HelpInfo from './HelpInfo';
import readme from '../README.md';

export default {
  title: 'Components high level/HelpInfo',
  component: HelpInfo,
  parameters: {
    readme: {
      sidebar: readme,
    },
    options: {},
  },
  argTypes: {
    placement: {
      control: {
        type: 'select',
        options: [
          PopoverPlacements.bottom,
          PopoverPlacements.left,
          PopoverPlacements.right,
          PopoverPlacements.top,
        ],
      },
    },
    mode: {
      control: {
        type: 'select',
        options: [PopoverModes.click, PopoverModes.over],
      },
    },
  },
} as Meta;

type HelpProps = React.ComponentProps<typeof HelpInfo>;
const Template: Story<HelpProps> = ({ children, ...args }) => (
  <HelpInfo {...args}>{children}</HelpInfo>
);

export const TextStory: Story<HelpProps> = Template.bind({});
TextStory.args = {
  content: 'Lorem ipsum dolor sit amet',
  mode: PopoverModes.click,
  placement: PopoverPlacements.right,
  children: 'test',
  isDisabled: false,
};

const htmlChild = (
  <div className="af-help-demo__container">
    <h3 className="af-help-demo__title">Profile</h3>
    <div className="af-help-demo__infos">
      <p className="af-help-demo__info">
        <span className="af-help-demo__info-title">Tweets</span>
        <span className="af-help-demo__info-number">1,337</span>
      </p>
      <p className="af-help-demo__info">
        <span className="af-help-demo__info-title">Following</span>
        <span className="af-help-demo__info-number">561</span>
      </p>
      <p className="af-help-demo__info">
        <span className="af-help-demo__info-title">Followers</span>
        <span className="af-help-demo__info-number">718</span>
      </p>
    </div>
  </div>
);

export const HtmlStory: Story<HelpProps> = Template.bind({});
HtmlStory.args = {
  content: htmlChild,
  classModifier: 'custom',
  mode: PopoverModes.over,
  placement: PopoverPlacements.right,
  children: 'test with custom hover',
  isDisabled: false,
};

export const ButtonStory: Story<HelpProps> = Template.bind({});
ButtonStory.args = {
  content: 'Bouton de validation',
  mode: PopoverModes.over,
  placement: PopoverPlacements.top,
  children: <Button>Valider</Button>,
  isDisabled: false,
};

export const BadgeStory: Story<HelpProps> = Template.bind({});
BadgeStory.args = {
  content: 'Nombre de notifications',
  mode: PopoverModes.over,
  placement: PopoverPlacements.top,
  children: <Badge classModifier="error">5</Badge>,
  isDisabled: false,
};
