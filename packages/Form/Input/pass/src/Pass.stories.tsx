import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import Pass from './Pass';
import readme from '../README.md';

export default {
  title: 'Form/Input/Pass',
  component: Pass,
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
} as Meta;

export const PassStory: Story<ComponentProps<typeof Pass>> = (args) => (
  <Pass {...args} />
);
PassStory.storyName = 'Pass';
PassStory.args = {
  name: 'password',
  id: 'uniqueid',
  type: 'password',
  value: '',
  readOnly: false,
  disabled: false,
  classModifier: 'bad',
  className: '',
  autoFocus: true,
};
PassStory.argTypes = {
  onChange: { action: 'onChange' },
  onToggleType: { action: 'onToggleType' },
  classModifer: {
    type: 'select',
    options: ['bad', 'okay', 'good', 'verygood', 'excellent'],
  },
};
