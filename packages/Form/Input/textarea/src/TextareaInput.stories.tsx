import React, { ComponentProps, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { CustomFormEvent, MessageTypes } from '@axa-fr/react-toolkit-form-core';
import TextareaInput from './TextareaInput';
import Readme from '../README.md';

export default {
  title: 'Form/Input/Textarea',
  component: TextareaInput,
  parameters: {
    readme: {
      sidebar: Readme,
    },
  },
  argTypes: {
    onChange: { action: 'onChange' },
  },
  args: {
    label: 'Place type',
    name: 'placeType',
    id: 'uinqid',
    value: '',
    rows: 6,
    cols: 60,
    placeholder: '',
    helpMessage: 'Enter the place type',
    message: '',
    messageType: MessageTypes.error,
    forceDisplayMessage: false,
    readOnly: false,
    disabled: false,
    isVisible: true,
    classModifier: '',
    className: '',
    tabIndex: null,
    autoFocus: true,
    classNameContainerLabel: 'col-md-2',
    classNameContainerInput: 'col-md-10',
  },
} as Meta;

type TexteareaInputProps = ComponentProps<typeof TextareaInput>;

const Template: Story<TexteareaInputProps> = ({
  value: initValue,
  onChange,
  ...args
}) => {
  const [value, setValue] = useState(initValue);
  return (
    <form className="af-form" name="myform">
      <TextareaInput
        {...args}
        value={value}
        onChange={(e: CustomFormEvent) => {
          setValue(e.value);
          onChange(e);
        }}
      />
    </form>
  );
};

export const TextareaInputStory: Story<TexteareaInputProps> = Template.bind({});
TextareaInputStory.storyName = 'TextareaInput';

export const TextareaRequiredStory: Story<TexteareaInputProps> = Template.bind(
  {}
);
TextareaRequiredStory.storyName = 'TextareaInput Required';
TextareaRequiredStory.args = {
  classModifier: 'required',
};
