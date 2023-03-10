import React, { ComponentPropsWithoutRef } from 'react';
import { Meta, Story } from '@storybook/react';
import Title from './Title';
import Readme from '../README.md';

export default {
  title: 'Client/Components/Title',
  component: Title,
  parameters: {
    viewport: {
      defaultViewport: 'iphone6',
    },
    readme: {
      sidebar: Readme,
    },
    options: {},
  },
} as Meta;

type TitleStoryProps = ComponentPropsWithoutRef<typeof Title> & {
  title: string;
};
const Template: Story<TitleStoryProps> = ({ title, ...args }) => (
  <Title {...args}>{title} </Title>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Sample Title',
  classModifier: '',
  className: 'afc-title',
};
