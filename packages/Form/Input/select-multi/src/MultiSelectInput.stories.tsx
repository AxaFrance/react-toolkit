import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import { MessageTypes } from '@axa-fr/react-toolkit-form-core';
import MultiSelectInput from './MultiSelectInput';
import readme from '../README.md';
import './select.scss';

export default {
  title: 'Form/Input/SelectMulti',
  component: MultiSelectInput,
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
} as Meta;

const options = [
  { value: 'fun', label: 'For fun', clearableValue: false },
  { value: 'work', label: 'For work' },
  { value: 'drink', label: 'For drink' },
  { value: 'sleep', label: 'For sleep' },
  { value: 'swim', label: 'For swim' },
];

const values = ['fun', 'drink'];

export const MultiSelectInputStory: Story<ComponentProps<
  typeof MultiSelectInput
>> = (args) => (
  <form className="af-form" name="myform">
    <MultiSelectInput {...args} />
  </form>
);
MultiSelectInputStory.storyName = 'MultiSelectInput';
MultiSelectInputStory.args = {
  label: 'Place type',
  name: 'placeType',
  options,
  values,
  helpMessage: 'Enter the place type',
  message: '',
  messageType: MessageTypes.error,
  forceDisplayMessage: false,
  readOnly: false,
  disabled: false,
  isVisible: true,
  classModifier: '',
  className: '',
  placeholder: 'Select',
  classNameContainerLabel: 'col-md-2',
  classNameContainerInput: 'col-md-10',
};
MultiSelectInputStory.argTypes = {
  onChange: { action: 'onChange' },
};
