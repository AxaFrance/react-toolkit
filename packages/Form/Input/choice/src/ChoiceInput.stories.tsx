import React, { ComponentPropsWithoutRef } from 'react';
import { Meta, Story } from '@storybook/react';
import { MessageTypes } from '@axa-fr/react-toolkit-form-core';
import ChoiceInput from './ChoiceInput';
import Choice from './Choice';
import readme from '../README.md';

export default {
  title: 'Agent/Form elements/Choice',
  component: Choice,
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
  argTypes: {
    onChange: { action: 'onChange' },
  },
} as Meta;

export const ChoiceStory: Story<ComponentPropsWithoutRef<typeof Choice>> = (
  args
) => <Choice {...args} />;
ChoiceStory.storyName = 'Choice';
ChoiceStory.args = {
  id: 'uniqueid',
  name: 'placeName',
  placeholder: 'Paris',
  readOnly: false,
  disabled: false,
  classModifier: '',
};

export const ChoiceInputStory: Story<
  ComponentPropsWithoutRef<typeof ChoiceInput>
> = (args) => (
  <form className="af-form" name="myform">
    <ChoiceInput {...args} />
  </form>
);
ChoiceInputStory.storyName = 'ChoiceInput';
ChoiceInputStory.args = {
  ...ChoiceStory.args,
  label: 'Place type',
  id: 'uniqueid',
  message: '',
  messageType: MessageTypes.error,
  forceDisplayMessage: false,
  isVisible: true,
};
