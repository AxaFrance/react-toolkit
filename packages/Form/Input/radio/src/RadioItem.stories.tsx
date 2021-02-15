import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import RadioItem from './RadioItem';
import RadioInput from './RadioInput';
import readme from '../README.md';

export default {
  title: 'Form/Input/RadioInput/Radio/RadioItem',
  component: RadioInput,
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
} as Meta;

export const RadioItemStory: Story<ComponentProps<typeof RadioItem>> = (
  args
) => <RadioItem {...args} />;
RadioItemStory.storyName = 'RadioItem';
RadioItemStory.args = {
  name: 'placeName',
  id: '',
  value: '',
  label: 'Paris',
  checked: false,
  readOnly: false,
  disabled: false,
  classModifier: '',
  className: '',
};
RadioItemStory.argTypes = {
  onChange: { action: 'onChange' },
};
