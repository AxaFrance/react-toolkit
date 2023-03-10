import React, { ComponentPropsWithRef } from 'react';
import { Meta, Story } from '@storybook/react';
import RadioItem from './RadioItem';
import readme from '../README.md';

export default {
  title: 'Agent/Components low level/Radio/RadioItem',
  component: RadioItem,
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
} as Meta;

type RadioItemProps = ComponentPropsWithRef<typeof RadioItem>;
export const RadioItemStory: Story<RadioItemProps> = (args) => (
  <RadioItem {...args} />
);
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
