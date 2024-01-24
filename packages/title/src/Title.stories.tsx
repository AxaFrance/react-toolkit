import React from 'react';
import { Meta, Story } from '@storybook/react';
import Title, { TitleProps } from './Title';
import Readme from '../README.md';

export default {
  title: 'Components/Title',
  component: Title,
  parameters: {
    readme: {
      sidebar: Readme,
    },
    options: {},
  },
} as Meta;

type TitleStoryProps = TitleProps & {
  title: string;
};
const Template: Story<TitleStoryProps> = ({ title, ...args }) => (
  <Title {...args}>{title}</Title>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Sample Title',
  classModifier: '',
  className: '',
  heading: 'h2',
};
