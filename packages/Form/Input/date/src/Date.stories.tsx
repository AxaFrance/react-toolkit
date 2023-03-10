import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MessageTypes } from '@axa-fr/react-toolkit-form-core';
import CustomDate from './Date';
import DateInput from './DateInput';
import readme from '../README.md';

export default {
  title: 'Agent/Form elements/Date',
  component: CustomDate,
  parameters: {
    readme: {
      sidebar: readme,
    },
    options: {},
  },
} as ComponentMeta<typeof CustomDate>;

const commonProps = {
  name: 'placeName',
  id: 'uniqueid',
  value: new Date('05/12/2010'),
};

export const DateStory: ComponentStory<typeof CustomDate> = ({
  value: initValue,
  onChange,
  ...props
}) => {
  const [value, setValue] = useState(initValue);
  return (
    <CustomDate
      value={value}
      onChange={(data) => {
        setValue(data.value);
        onChange && onChange(data);
      }}
      {...props}
      name="date"
      placeholder="12/08/2017"
    />
  );
};
DateStory.args = {
  ...commonProps,
};
DateStory.argTypes = { onChange: { action: 'onChange' } };

const Template: ComponentStory<typeof DateInput> = (props) => (
  <form className="af-form" name="myform">
    <DateInput {...props} />
  </form>
);

export const DateInputStory: ComponentStory<typeof DateInput> = Template.bind(
  {}
);
DateInputStory.args = {
  ...commonProps,
  isVisible: true,
  label: 'Place name',
  helpMessage: 'jj/mm/aaaa',
  message: '',
  messageType: MessageTypes.success,
  forceDisplayMessage: false,
  classNameContainerLabel: 'col-md-2',
  classNameContainerInput: 'col-md-10',
};
DateInputStory.argTypes = {
  onChange: { action: 'changed' },
};

export const DateInputStoryRequired: ComponentStory<typeof DateInput> =
  Template.bind({});
DateInputStoryRequired.args = {
  ...DateInputStory.args,
  classModifier: 'required',
};
DateInputStoryRequired.argTypes = {
  onChange: { action: 'changed' },
};
