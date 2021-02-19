import React, { ComponentProps, useState } from 'react';
import HelpButton from '@axa-fr/react-toolkit-help';
import { Meta, Story } from '@storybook/react';
import { MessageTypes } from '@axa-fr/react-toolkit-form-core';
import TextInput from './TextInput';
import readme from '../README.md';

export default {
  title: 'Form/Input/Text',
  component: TextInput,
  parameters: {
    readme: {
      sidebar: readme,
    },
    options: {},
  },
  argTypes: {
    onChange: { action: 'onChange' },
    classModifier: {
      name: 'classModifier',
      description: 'Define or custom class modifier. For example: required',
    },
    message: {
      description: `Message displayed when an error occur. If props message is empty, message isn't displayed`,
    },
  },
} as Meta;

type TextInputProps = ComponentProps<typeof TextInput>;

export const TextInputStory: Story<TextInputProps> = ({
  value: valueInit,
  onChange,
  ...args
}) => {
  const [value, setValue] = useState(valueInit);
  return (
    <form className="af-form" name="myform">
      <TextInput
        value={value}
        onChange={(e) => {
          setValue(e.value);
          onChange(e);
        }}
        {...args}>
        <HelpButton>tooltip avec du text</HelpButton>
      </TextInput>
    </form>
  );
};
TextInputStory.storyName = 'Text Input';
TextInputStory.args = {
  id: 'uniqueid',
  label: 'Place name',
  name: 'placeName',
  value: '',
  helpMessage: 'Enter the place name, ex : Webcenter',
  placeholder: '',
  message: '',
  messageType: MessageTypes.error,
  forceDisplayMessage: false,
  readOnly: false,
  disabled: false,
  isVisible: true,
  classModifier: '',
  className: '',
  autoFocus: true,
  classNameContainerLabel: 'col-md-2',
  classNameContainerInput: 'col-md-10',
};
