import React, { ComponentProps, PropsWithChildren } from 'react';
import { Meta, Story } from '@storybook/react';
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
    actions: { argTypesRegex: '^on.*' },
  },
  argTypes: {
    messageType: {
      control: { type: 'select', options: Object.values(MessageTypes) },
    },
    mode: {
      control: { type: 'select', options: Object.values(CheckboxModes) },
    },
  },
} as Meta;

const Template: Story<ComponentProps<typeof CheckboxInput>> = (args) => (
  <form className="af-form" name="myform">
    <CheckboxInput {...args} values={values} options={options} />
  </form>
);
export const CheckboxInputStory = Template.bind({}) as typeof Template;
CheckboxInputStory.storyName = 'CheckboxInput';
CheckboxInputStory.args = {
  label: 'Place type',
  name: 'placeType',
  id: 'inputuniqueid',
  mode: CheckboxModes.classic,
  message: '',
  messageType: MessageTypes.error,
  forceDisplayMessage: false,
  readOnly: false,
  disabled: false,
  isVisible: true,
  classModifier: 'required',
  className: '',
  classNameContainerLabel: 'col-md-2',
  classNameContainerInput: 'col-md-10',
};

const TemplateChecboxItem: Story<ComponentProps<typeof CheckboxItem>> = (
  args
) => <CheckboxItem {...args} />;

export const CheckboxItemToggleStory = TemplateChecboxItem.bind(
  {}
) as typeof TemplateChecboxItem;
CheckboxItemToggleStory.storyName = 'CheckboxItem Toggle';
CheckboxItemToggleStory.args = {
  name: 'placeType',
  id: 'uniqueid',
  value: 'toto',
  readOnly: false,
  disabled: false,
  checked: false,
  className: 'af-form__checkbox-toggle',
};

export const CheckboxItemStory = TemplateChecboxItem.bind(
  {}
) as typeof TemplateChecboxItem;
CheckboxItemStory.storyName = 'CheckboxItem';
CheckboxItemStory.args = {
  ...CheckboxItemToggleStory.args,
  className: '',
  label: 'web center forever',
};

export const CheckboxStory: Story<ComponentProps<typeof Checkbox>> = (args) => (
  <Checkbox {...args} />
);
CheckboxStory.storyName = 'Checkbox';
CheckboxStory.args = {
  options,
  values,
  name: 'placeName',
  id: 'uniqueid',
  mode: CheckboxModes.classic,
  placeholder: 'Paris',
  readOnly: false,
  disabled: false,
};
