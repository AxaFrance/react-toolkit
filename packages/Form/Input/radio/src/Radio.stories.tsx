import { Meta, Story } from '@storybook/react';
import React, { ComponentPropsWithoutRef } from 'react';
import { Radio, RadioModes } from '.';
import readme from '../README.md';

export default {
  title: 'Form elements/Radio',
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
} as Meta;

type RadioProps = ComponentPropsWithoutRef<typeof Radio>;
export const RadioStory: Story<RadioProps> = (args) => (
  <form className="af-form" name="myform">
    <div className="row">
      <div className="col-md-10">
        <Radio {...args} />
      </div>
    </div>
  </form>
);
const options = [
  { label: 'For fun', value: '1' },
  { label: 'For work', value: '2', id: 'customId' },
  { label: 'For drink', value: '3' },
  { label: 'For the life', value: '4', disabled: true },
];

const modes = [RadioModes.classic, RadioModes.default, RadioModes.inline];
RadioStory.storyName = 'Radio';
RadioStory.args = {
  name: 'placeName',
  options,
  mode: RadioModes.default,
  value: '',
  placeholder: 'Paris',
  readOnly: false,
  disabled: false,
  classModifier: '',
};
RadioStory.argTypes = {
  mode: { control: { type: 'select', options: modes } },
  onChange: { action: 'onChange' },
};
