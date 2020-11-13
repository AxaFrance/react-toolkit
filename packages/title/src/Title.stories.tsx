import React from 'react';
import { Story } from '@storybook/react';
import Title, { TitleProps } from './Title';
import Readme from '../README.md';

export default {
  title: 'Title',
  component: Title,
  parameters: {
    readme: {
      sidebar: Readme,
    },
    options: {},
  },
};

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
};
