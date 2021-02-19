import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import { MessageTypes } from '@axa-fr/react-toolkit-form-core';
import Switch from './Switch';
import SwitchInput from './SwitchInput';
import readme from '../README.md';
import SwitchItem from './SwitchItem';

export default {
  title: 'Form/Input/Switch',
  component: Switch,
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
} as Meta;

const options: Omit<ComponentProps<typeof SwitchItem>, 'onChange'>[] = [
  {
    id: 'check0',
    label: 'Choix 1',
    value: 'value1',
  },
  {
    id: 'check1',
    label: 'Choix 2',
    value: '2',
  },
  {
    id: 'check2',
    label: 'Choix 3',
    value: 'value3',
  },
  {
    label: 'Choix 44444444444444',
    value: '4',
  },
];

type SwitchProps = ComponentProps<typeof Switch>;

export const SwitchStory: Story<SwitchProps> = (args) => <Switch {...args} />;
SwitchStory.storyName = 'Switch';
SwitchStory.args = {
  name: 'Form.SwitchInput',
  value: options[3].value,
  disabled: false,
  options,
};
SwitchStory.argTypes = {
  onChange: { action: 'onChange' },
  value: {
    control: {
      type: 'select',
      options,
    },
  },
};

type SwitchInputProps = ComponentProps<typeof SwitchInput>;
export const SwitchInputStory: Story<SwitchInputProps> = (args) => (
  <SwitchInput {...args} />
);
SwitchInputStory.storyName = 'SwitchInput';
SwitchInputStory.args = {
  ...SwitchStory.args,
  label: 'Select a choice',
  isVisible: true,
  classModifier: 'required',
  className: '',
  message: '',
  messageType: MessageTypes.error,
  forceDisplayMessage: false,
};
SwitchInputStory.argTypes = {
  ...SwitchStory.argTypes,
};
