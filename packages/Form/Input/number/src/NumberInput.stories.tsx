import { MessageTypes } from '@axa-fr/react-toolkit-form-core';
import Help from '@axa-fr/react-toolkit-help';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn as Story } from '@storybook/react';
import React, { ComponentPropsWithoutRef, useState } from 'react';
import readme from '../README.md';
import Number from './Number';
import NumberInput from './NumberInput';

export default {
  title: 'Form elements/Number',
  component: Number,
  argTypes: {},
  parameters: {
    readme: {
      sidebar: readme,
    },
    options: {},
  },
} as Meta;

const Template: Story<
  Omit<ComponentPropsWithoutRef<typeof NumberInput>, 'value' | 'onChange'>
> = (args) => {
  const [value, setValue] = useState<number>();
  return (
    <form className="af-form" name="myform">
      <NumberInput
        {...args}
        value={value}
        onChange={(e) => {
          action('onChange')(e);
          setValue(e.target.valueAsNumber);
        }}>
        <Help>tooltip avec du text</Help>
      </NumberInput>
    </form>
  );
};

export const NumberInputStory = Template.bind({}) as typeof Template;
NumberInputStory.storyName = 'NumberInput';
NumberInputStory.args = {
  label: 'Place name',
  name: 'placeName',
  id: 'uniqueid',
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
NumberInputStory.argTypes = {
  messageType: {
    control: {
      type: 'select',
      options: Object.values(MessageTypes),
    },
  },
};

export const NumberInputStoryRequired = Template.bind({}) as typeof Template;
NumberInputStoryRequired.storyName = 'NumberInput Required';
NumberInputStoryRequired.args = {
  ...NumberInputStory.args,
  classModifier: 'required',
};

export const NumberStory: Story<ComponentPropsWithoutRef<typeof Number>> = (
  args
) => <Number {...args} />;
NumberStory.storyName = 'Number';
NumberStory.args = {
  id: 'uniqueid',
  name: 'placeName',
  value: 2.9,
  placeholder: 'Paris',
  readOnly: false,
  disabled: false,
  classModifier: '',
  className: '',
  autoFocus: true,
};
NumberStory.argTypes = {
  onChange: { action: 'onChange' },
};
