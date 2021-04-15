import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import Badge from './Badge';
import readme from '../README.md';

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    readme: {
      sidebar: readme,
    },
    options: {},
  },
  argTypes: {
    classModifier: {
      control: {
        type: 'select',
        options: ['success', 'info', 'danger', 'error'],
      },
      defaultValue: 'succes',
    },
  },
} as Meta;

type BadgeProps = ComponentProps<typeof Badge>;
const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const BadgeStory: Story<BadgeProps> = Template.bind({});
BadgeStory.storyName = 'Simple badge';
BadgeStory.args = {
  children: 'Lorem ipsum',
  classModifier: 'success',
  disabled: false,
};

export const BadgeIconStory: Story<BadgeProps> = Template.bind({});
BadgeIconStory.storyName = 'With Icon';
BadgeIconStory.args = {
  children: <i className="glyphicon glyphicon-bell" />,
  classModifier: 'error',
  disabled: false,
};
