import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import HelpButton from '@axa-fr/react-toolkit-help';
import { MessageTypes } from '@axa-fr/react-toolkit-form-core';
import RadioModes from './RadioModes';
import { Option } from '../../../../core/src/InputManager';
import RadioInput from './RadioInput';
import readme from '../README.md';

export default {
  title: 'Form/Input/RadioInput',
  component: RadioInput,
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
} as Meta;

const options = [
  { label: 'For fun', value: '1' },
  { label: 'For work', value: '2', id: 'customId' },
  { label: 'For drink', value: '3' },
  { label: 'For the life', value: '4', disabled: true },
] as Option[];

type RadioInputProps = ComponentProps<typeof RadioInput>;
const Template: Story<RadioInputProps> = (args) => (
  <form className="af-form" name="myform">
    <RadioInput {...args} />
  </form>
);

export const RadioInputStory: Story<RadioInputProps> = Template.bind({});
RadioInputStory.storyName = 'RadioInput Default';
RadioInputStory.args = {
  label: 'Place type',
  name: 'placeType',
  id: '',
  options,
  mode: RadioModes.default,
  value: '',
  message: '',
  messageType: MessageTypes.error,
  forceDisplayMessage: false,
  readOnly: false,
  disabled: false,
  isVisible: true,
  classModifier: '',
  className: '',
  classNameContainerLabel: 'col-md-2',
  classNameContainerInput: 'col-md-10',
};
RadioInputStory.argTypes = {
  onChange: { action: 'onChange' },
  mode: { control: { type: 'select', options: Object.values(RadioModes) } },
};

export const RadioInputWithChildrenStory: Story<RadioInputProps> = Template.bind(
  {}
);
RadioInputWithChildrenStory.storyName = 'Radio with children';
RadioInputWithChildrenStory.args = {
  ...RadioInputStory.args,
  children: (
    <HelpButton mode="hover" classModifier="small">
      Hello Radio
    </HelpButton>
  ),
};
