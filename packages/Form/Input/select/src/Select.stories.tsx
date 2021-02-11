import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import {
  FieldError,
  FieldInput,
  HelpMessage,
} from '@axa-fr/react-toolkit-form-core';
import Select from './Select';

const options = [
  { value: 'fun', label: 'For fun' },
  { value: 'work', label: 'For work' },
  { value: 'drink', label: 'For drink' },
];

export default {
  title: 'Form/Input/Select',
  component: Select,
  argTypes: {
    onChange: { action: 'onChange' },
  },
  args: {
    name: 'placeName',
    id: 'muid',
    value: '',
    readOnly: false,
    disabled: false,
    isVisible: true,
    classModifier: '',
    className: '',
    placeholder: '- Select -',
    forceDisplayPlaceholder: false,
  },
} as Meta;

type SelectStory = Story<ComponentProps<typeof Select>>;
const Template: SelectStory = (args) => (
  <form className="af-form" name="myform">
    <FieldInput>
      <div className="col-md-4">
        <div className="af-form__select">
          <Select options={options} {...args} />
          <HelpMessage message="Enter the place name, ex : Webcenter" />
          <FieldError />
        </div>
      </div>
    </FieldInput>
  </form>
);

export const SelectDefault: SelectStory = Template.bind({});
SelectDefault.storyName = 'Select';

export const SelectKeepPlaceholderStory: SelectStory = Template.bind({});
SelectKeepPlaceholderStory.storyName = 'Select keep placeholder';
SelectKeepPlaceholderStory.args = {
  forceDisplayPlaceholder: true,
};
