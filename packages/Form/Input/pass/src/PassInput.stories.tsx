import React, { ComponentProps, useState } from 'react';
import HelpButton from '@axa-fr/react-toolkit-help';
import { Meta, Story } from '@storybook/react';
import { MessageTypes } from '@axa-fr/react-toolkit-form-core';
import PassInput from './PassInput';
import readme from '../README.md';

export default {
  title: 'Form/Input/Pass',
  component: PassInput,
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
} as Meta;

type PassInputProps = ComponentProps<typeof PassInput>;
export const PassInputStory: Story<PassInputProps> = ({
  value: initValue,
  onChange,
  ...args
}) => {
  const [value, setValue] = useState(initValue);
  const [score, setScore] = useState<number>();
  return (
    <form className="af-form" name="myform">
      <PassInput
        value={value}
        onChange={(e) => {
          setValue(e.value);
          onChange(e);
          setScore(Math.floor(Math.random() * 5));
        }}
        score={score}
        {...args}>
        <HelpButton>Choose a password</HelpButton>
      </PassInput>
    </form>
  );
};
PassInputStory.storyName = 'PassInput';
PassInputStory.args = {
  id: 'uniqueid',
  label: 'Password',
  name: 'password',
  value: '',
  helpMessage: '8 caractères minimum',
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
PassInputStory.argTypes = {
  onChange: { action: 'onChange' },
  onToggleType: { action: 'onToggleType' },
};
