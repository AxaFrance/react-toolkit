import React, { PropsWithChildren } from 'react';
import { Meta } from '@storybook/react';
import { MessageTypes } from '@axa-fr/react-toolkit-form-core';
import CheckboxInput from './CheckboxInput';
import CheckboxItem from './CheckboxItem';
import CheckboxModes from './CheckboxModes';
import Checkbox from './Checkbox';
import readme from '../README.md';

const Badge = ({
  children,
  classModifier,
}: PropsWithChildren<{ classModifier?: string }>) => (
  <strong style={{ color: 'green' }} className={classModifier ?? ''}>
    {children}
  </strong>
);

const options = [
  { label: 'Disabled', value: '1', disabled: true, id: 'uniqueId1' },
  { label: 'Unchecked', value: '2', id: 'uniqueId2' },
  { label: 'Checked', value: '3' },
  {
    label: <Badge classModifier="success">A JSX element</Badge>,
    value: '4',
  },
];
const values = ['1', '3'];

export default {
  title: 'Form elements/Checkbox',
  component: CheckboxInput,
  parameters: {
    readme: {
      sidebar: readme,
    },
  },
  argTypes: {
    onChange: { action: 'onChange' },
    messageType: {
      control: { type: 'select', options: Object.values(MessageTypes) },
    },
    mode: {
      control: { type: 'select', options: Object.values(CheckboxModes) },
    },
  },
} as Meta;

export const CheckboxInputStory = (args) => (
  <form className="af-form" name="myform">
    <CheckboxInput
      {...args}
      values={values}
      options={options}
      isVisible
      classNameContainerLabel="col-md-2"
      classNameContainerInput="col-md-10"
    />
  </form>
);
CheckboxInputStory.storyName = 'CheckboxInput';
CheckboxInputStory.args = {
  label: 'Place type',
  name: 'placeType',
  id: 'inputuniqueid',
  mode: CheckboxModes.classic,
  messageType: MessageTypes.error,
  classModifier: 'required',
};

export const CheckboxItemToggleStory = (args) => (
  <CheckboxItem
    {...args}
    name="placeType"
    id="uniqueid"
    value="toto"
    className="af-form__checkbox-toggle"
  />
);
CheckboxItemToggleStory.storyName = 'CheckboxItem Toggle';

export const CheckboxItemStory = (args) => (
  <CheckboxItem
    {...args}
    name="placeType"
    id="uniqueid"
    value="toto"
    label="web center forever"
  />
);
CheckboxItemStory.storyName = 'CheckboxItem';

export const CheckboxStory = (args) => (
  <Checkbox
    {...args}
    options={options}
    values={values}
    name="placeName"
    id="uniqueid"
    mode={CheckboxModes.classic}
    placeholder="Paris"
  />
);
CheckboxStory.storyName = 'Checkbox';
