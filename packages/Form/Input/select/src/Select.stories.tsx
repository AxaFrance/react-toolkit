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

const groupedOptions = [
  {
    label: 'Color',
    subOptions: [
      { value: 'red', label: 'Red' },
      { value: 'blue', label: 'Blue' },
      { value: 'green', label: 'Green' },
    ],
  },
  {
    label: 'Size',
    subOptions: [
      { value: 'small', label: 'Small size' },
      { value: 'medium', label: 'Medium size' },
      { value: 'large', label: 'Large size' },
    ],
  },
];

export default {
  title: 'Form elements/Select',
  component: Select,
  argTypes: {
    onChange: { action: 'onChange' },
  },
} as Meta;

type SelectStory = Story<ComponentProps<typeof Select>>;
const Template: SelectStory = (args) => (
  <form className="af-form" name="myform">
    <FieldInput>
      <div className="col-md-4">
        <div className="af-form__select">
          <Select
            {...args}
            name="placeName"
            id="muid"
            value=""
            isVisible
            classModifier=""
            className=""
          />
          <HelpMessage message="Enter the place name, ex : Webcenter" />
          <FieldError />
        </div>
      </div>
    </FieldInput>
  </form>
);

export const SelectDefault: SelectStory = Template.bind({});
SelectDefault.storyName = 'Select';
SelectDefault.args = {
  options,
};

export const SelectKeepPlaceholderStory: SelectStory = Template.bind({});
SelectKeepPlaceholderStory.storyName = 'Select keep placeholder';
SelectKeepPlaceholderStory.args = {
  forceDisplayPlaceholder: true,
  options,
};

export const SelectWithCategoriesStory: SelectStory = Template.bind({});
SelectWithCategoriesStory.storyName = 'Select with categories';
SelectWithCategoriesStory.args = {
  options: groupedOptions,
};
