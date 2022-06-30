import React, { ComponentProps, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { MessageTypes } from '@axa-fr/react-toolkit-form-core';
import MultiSelect from './MultiSelect';
import MultiSelectInput from './MultiSelectInput';
import readme from '../README.md';

export default {
  title: 'Form elements/SelectMulti',
  component: MultiSelect,
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
const selectedValues = ['fun', 'drink'];

export const MultiSelectStory: Story<ComponentProps<typeof MultiSelect>> = ({
  values,
  onChange,
  ...args
}) => {
  const [newValues, setNewValues] = useState(values);
  return (
    <MultiSelect
      values={newValues}
      onChange={(v) => {
        setNewValues(v.values);
        onChange(v);
      }}
      {...args}
    />
  );
};

MultiSelectStory.storyName = 'MultiSelect';
MultiSelectStory.args = {
  name: 'placeName',
  options,
  readOnly: false,
  disabled: false,
  className: '',
  placeholder: 'Select',
  values: selectedValues,
};

MultiSelectStory.argTypes = {
  onChange: { action: 'onChange' },
};

export const MultiSelectStoryOneValue: Story<
  ComponentProps<typeof MultiSelect>
> = ({ value, onChange, ...args }) => {
  const [newValue, setNewValue] = useState(value);
  return (
    <MultiSelect
      value={newValue}
      onChange={(v) => {
        setNewValue(v.value);
        onChange(v);
      }}
      {...args}
    />
  );
};
MultiSelectStoryOneValue.storyName = 'MultiSelect with one value';
MultiSelectStoryOneValue.args = {
  ...MultiSelectStory.args,
  values: null,
  value: selectedValues[0],
};

export const MultiSelectInputStory: Story<
  ComponentProps<typeof MultiSelectInput>
> = (args) => (
  <form className="af-form" name="myform">
    <MultiSelectInput {...args} />
  </form>
);
MultiSelectInputStory.storyName = 'MultiSelectInput';
MultiSelectInputStory.args = {
  ...MultiSelectStory.args,
  label: 'Place type',
  helpMessage: 'Enter the place type',
  message: '',
  messageType: MessageTypes.error,
  forceDisplayMessage: false,
  isVisible: true,
  classModifier: '',
  classNameContainerLabel: 'col-md-2',
  classNameContainerInput: 'col-md-10',
};
MultiSelectInputStory.argTypes = {
  onChange: { action: 'onChange' },
};
