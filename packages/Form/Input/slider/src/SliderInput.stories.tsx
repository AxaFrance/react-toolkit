import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import { MessageTypes } from '@axa-fr/react-toolkit-form-core';
import SliderInput from './SliderInput';
import readme from '../README.md';
import './slider.scss';

const options = [
  { label: '64', value: 64 },
  { label: '128', value: 128 },
  { label: '256', value: 256 },
  { label: '1024', value: 1024 },
  { label: '2048', value: 2048 },
  { label: '4096', value: 4096 },
];

export default {
  title: 'Form/Input/Slider',
  component: SliderInput,
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
} as Meta;

type SliderInputProps = ComponentProps<typeof SliderInput>;

export const SliderInputStory: Story<SliderInputProps> = (args) => (
  <form className="af-form" name="myform">
    <SliderInput {...args} />
  </form>
);
SliderInputStory.storyName = 'SliderInput';
SliderInputStory.args = {
  options,
  id: 'uniqueid',
  label: 'Place name',
  name: 'placeName',
  value: 1024,
  helpMessage: 'Enter the place name, ex : Webcenter',
  message: '',
  messageType: MessageTypes.error,
  forceDisplayMessage: false,
  disabled: false,
  isVisible: true,
  classModifier: '',
  className: '',
  classNameContainerLabel: 'col-md-2',
  classNameContainerInput: 'col-md-10',
};
SliderInputStory.argTypes = {
  onChange: { action: 'onChange' },
};
