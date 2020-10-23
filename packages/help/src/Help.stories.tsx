import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { PopoverPlacements, PopoverModes } from '@axa-fr/react-toolkit-popover';
import Help from './Help.container';
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
const Template: Story<HelpProps> = ({ content, ...args }) => <Help {...args}>{content}</Help>;

export const TextStory = Template.bind({});
TextStory.args = {
  content: 'Lorem ipsum dolor sit amet',
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

export const HtmlStory = Template.bind({});
HtmlStory.args = {
  content: htmlChild,
  classModifier: 'custom',
};
