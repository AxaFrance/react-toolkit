import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import Textarea from './Textarea';
import Readme from '../README.md';
import './textarea.scss';

export default {
  title: 'Form/Input/Textarea',
  component: Textarea,
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
  argTypes: {
    onChange: { action: 'onChange' },
  },
} as Meta;

type TextareaProps = ComponentProps<typeof Textarea>;

const Template: Story<TextareaProps> = (args) => <Textarea {...args} />;

export const TextareaStory: Story<TextareaProps> = Template.bind({});
TextareaStory.storyName = 'Textarea';
TextareaStory.args = {
  name: 'placeName',
  id: 'uniqueid',
  value: '',
  placeholder: 'Paris',
  readOnly: false,
  disabled: false,
  classModifier: '',
  className: '',
  tabIndex: null,
  autoFocus: true,
};
