import React, { ComponentProps, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import MultiSelect from './MultiSelect';
import readme from '../README.md';

export default {
  title: 'Form/Input/SelectMulti',
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
const values = ['fun', 'drink'];

export const MultiSelectStory: Story<ComponentProps<typeof MultiSelect>> = ({
  values: selectValues,
  onChange,
  ...args
}) => {
  const [newValues, setNewValues] = useState(selectValues);
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
  values,
};

MultiSelectStory.argTypes = {
  onChange: { action: 'onChange' },
};
