import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import Text from './Text';
import readme from '../README.md';

export default {
  title: 'Form/Input/Text',
  component: Text,
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
  argTypes: {
    onChange: { action: 'onChange' },
  },
} as Meta;

type TextProps = ComponentProps<typeof Text>;

export const TextStory: Story<TextProps> = (args) => <Text {...args} />;
TextStory.storyName = 'Text';
TextStory.args = {
  name: 'placeName',
  id: 'uniqueid',
  value: 'Robert',
  placeholder: 'Paris',
  readOnly: false,
  disabled: false,
  classModifier: '',
  className: '',
  tabIndex: null,
  autoFocus: true,
};
