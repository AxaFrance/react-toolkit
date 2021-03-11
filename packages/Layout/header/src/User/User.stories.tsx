import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import User from './User';
import readme from '../../README.md';

export default {
  title: 'Layout/Header/User',
  component: User,
  parameters: {
    readme: {
      sidebar: readme,
    },
    options: {},
  },
  argTypes: {
    onClick: { action: 'onClick' },
  },
} as Meta;

type UserProps = ComponentProps<typeof User>;
const Template: Story<UserProps> = (args) => <User {...args} />;

export const NoLink: Story<UserProps> = Template.bind({});
NoLink.storyName = 'No Link';
NoLink.args = {
  name: 'Pierre Martin',
  profile: 'profile',
};

export const Default: Story<UserProps> = Template.bind({});
Default.args = {
  ...NoLink.args,
  href: '/profile',
};
