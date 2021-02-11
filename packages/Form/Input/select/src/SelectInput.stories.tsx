import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import { MessageTypes } from '@axa-fr/react-toolkit-form-core';
import SelectInput from './SelectInput';
import readme from '../README.md';

export default {
  title: 'Form/Input/Select',
  component: SelectInput,
  parameters: {
    readme: {
      sidebar: readme,
    },
    options: {},
  },
  argTypes: {
    onChange: { action: 'onChange' },
    messageType: {
      control: {
        type: 'select',
        options: Object.keys(MessageTypes),
      },
    },
  },
  args: {
    label: 'Place type',
    name: 'placeName',
    id: 'muid',
    helpMessage: 'Enter the place type',
    value: '',
    readOnly: false,
    disabled: false,
    isVisible: true,
    classModifier: '',
    className: '',
    placeholder: '- Select -',
    message: '',
    forceDisplayMessage: false,
    classNameContainerLabel: 'col-md-2',
    classNameContainerInput: 'col-md-10',
    forceDisplayPlaceholder: false,
  },
} as Meta;

const options = [
  { value: 'fun', label: 'For fun' },
  { value: 'work', label: 'For work' },
  { value: 'drink', label: 'For drink' },
];

type SelectStory = Story<ComponentProps<typeof SelectInput>>;
const Template: SelectStory = (args) => (
  <form className="af-form" name="myform">
    <SelectInput options={options} {...args} />
  </form>
);

export const SelectInputStory: SelectStory = Template.bind({});
SelectInputStory.storyName = 'Select Input';

export const SelectInputStoryRequired: SelectStory = Template.bind({});
SelectInputStoryRequired.args = {
  classModifier: 'required',
};
SelectInputStoryRequired.storyName = 'Select Input Required';
