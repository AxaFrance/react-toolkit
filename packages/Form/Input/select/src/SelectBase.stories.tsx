import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import SelectBase from './SelectBase';

export default {
  title: 'Form/Input/Select',
  component: SelectBase,
  argTypes: {
    onChange: { action: 'onChange' },
  },
  args: {
    label: 'Place type *',
    name: 'placeType',
    id: 'muid',
    value: '',
    readOnly: false,
    disabled: false,
    isVisible: true,
  },
} as Meta;

const options = [
  { value: 'fun', label: 'For fun' },
  { value: 'work', label: 'For work' },
  { value: 'drink', label: 'For drink' },
];

type SelectBaseStory = Story<ComponentProps<typeof SelectBase>>;
const Template: SelectBaseStory = (args) => (
  <form className="af-form" name="myform">
    <div className="af-form__select">
      <SelectBase options={options} {...args} />
    </div>
  </form>
);

export const SelectBaseDefault: SelectBaseStory = Template.bind({});
SelectBaseDefault.storyName = 'SelectBase';
