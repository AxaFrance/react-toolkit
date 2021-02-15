import { Meta, Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import { Radio, RadioModes } from '.';
import readme from '../README.md';
import { Option } from '../../../../core/src/InputManager';

export default {
  title: 'Form/Input/RadioInput/Radio',
  component: Radio,
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
} as Meta;

export const RadioStory: Story<ComponentProps<typeof Radio>> = (args) => (
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
] as Option[];

const modes = [RadioModes.classic, RadioModes.default, RadioModes.inline];
RadioStory.storyName = 'Radio';
RadioStory.args = {
  name: 'placeName',
  id: '',
  options,
  mode: RadioModes.default,
  value: '',
  placeholder: 'Paris',
  readOnly: false,
  disabled: false,
  classModifier: '',
  className: '',
};
RadioStory.argTypes = {
  mode: { control: { type: 'select', options: modes } },
  onChange: { action: 'onChange' },
};
