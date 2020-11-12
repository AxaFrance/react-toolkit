import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { PopoverPlacements, PopoverModes } from '@axa-fr/react-toolkit-popover';
import Help from './Help';
import readme from '../README.md';
import './help-custom.scss';

export default {
  title: 'Help',
  component: Help,
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

type HelpProps = React.ComponentProps<typeof Help>;
const Template: Story<HelpProps> = ({ children, ...args }) => (
  <Help {...args}>{children}</Help>
);

export const TextStory: Story<HelpProps> = Template.bind({});
TextStory.args = {
  children: 'Lorem ipsum dolor sit amet',
  mode: PopoverModes.click,
  placement: PopoverPlacements.right,
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
  children: htmlChild,
  classModifier: 'custom',
  mode: PopoverModes.over,
  placement: PopoverPlacements.right,
};
