import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import RadioItem from './RadioItem';
import RadioInput from './RadioInput';
import readme from '../README.md';

export default {
  title: 'Components low level/Radio/RadioItem',
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
  isChecked: false,
  readOnly: false,
  disabled: false,
  classModifier: '',
};
RadioItemStory.argTypes = {
  onChange: { action: 'onChange' },
};
