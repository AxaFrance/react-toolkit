import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import Loader from './Loader';
import LoaderModes from './LoaderModes';
import readme from '../README.md';

export default {
  title: 'Components/Loader',
  component: Loader,
  parameters: {
    readme: {
      sidebar: readme,
    },
    options: {},
  },
  argTypes: {
    mode: {
      control: {
        type: 'select',
        options: LoaderModes,
      },
      defaultValue: LoaderModes.get,
    },
  },
} as Meta;

type LoaderProps = ComponentProps<typeof Loader>;
const Template: Story<LoaderProps> = (args) => <Loader {...args} />;

export const LoaderStory: Story<LoaderProps> = Template.bind({});
LoaderStory.storyName = 'Default';
LoaderStory.args = {
  text: '',
  classModifier: '',
  className: '',
  children: (
    <div>
      <h1>Title Child</h1>
      <span>Here your child component</span>
    </div>
  ),
};
