import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import Slider from './Slider';

export default {
  title: 'Form/Input/Slider',
  component: Slider,
} as Meta;

const options = [
  { label: '64', value: 64 },
  { label: '128', value: 128 },
  { label: '256', value: 256 },
  { label: '1024', value: 1024 },
  { label: '2048', value: 2048 },
  { label: '4096', value: 4096 },
];

export const SliderStory: Story<ComponentProps<typeof Slider>> = (args) => (
  <form className="af-form" name="myform">
    <Slider {...args} />
  </form>
);
SliderStory.storyName = 'Slider';
SliderStory.args = {
  name: 'placeName',
  options,
  id: 'uniqueid',
  value: 2048,
  disabled: false,
  className: '',
};
SliderStory.argTypes = {
  onChange: { action: 'onChange' },
  onBlur: { action: 'onBlur' },
  onFocus: { action: 'onFocus' },
};
