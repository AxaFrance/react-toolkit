import React, { ComponentPropsWithoutRef } from 'react';
import {
  HelpMessage,
  Field,
  FieldError,
} from '@axa-fr/react-toolkit-form-core';
import { Story, Meta } from '@storybook/react';
import DateInput from './DateInput';
import CustomDate from './CustomDate';
import Readme from '../README.md';

export default {
  title: 'Form/Input/Date Input',
  component: DateInput,
  parameters: {
    readme: {
      sidebar: Readme,
    },
    options: {},
  },
  argTypes: {
    onChange: { action: 'Change value' },
  },
} as Meta;

const Template: Story<ComponentPropsWithoutRef<typeof DateInput>> = (args) => (
  <DateInput {...args} />
);

type CustomTemplateProps = ComponentPropsWithoutRef<typeof CustomDate> & {
  message: string;
  forceDisplayMessage: boolean;
  helpMessage: string;
};
const CustomTemplate: Story<CustomTemplateProps> = ({
  message,
  forceDisplayMessage,
  helpMessage,
  ...args
}) => (
  <form className="af-form" name="myform">
    <Field
      id="customDateId"
      label="Choix d'une date"
      message={message}
      forceDisplayMessage={forceDisplayMessage}>
      <div className="col-md-10">
        <div className="af-datepicker__container">
          <CustomDate {...args} />
          <span className="glyphicon glyphicon-calendar" />
        </div>
        <HelpMessage message={helpMessage} />
        <FieldError />
      </div>
    </Field>
  </form>
);

const dateStory = new Date('02/25/2010');

export const DateInputStory = Template.bind({}) as typeof Template;
DateInputStory.args = {
  label: 'Date de naissance',
  name: 'birthday',
  helpMessage: 'jj/mm/aaaa',
  placeholder: 'dd/mm/yyyy',
  value: dateStory,
  locale: 'fr',
  format: 'dd/MM/yyyy',
  fixedHeight: true,
  showMonthDropdown: true,
  showYearDropdown: true,
  todayButton: "Aujourd'hui",
  popperPlacement: 'right-start',
  yearDropdownItemNumber: 6,
};

export const DateInputStoryRequired = Template.bind({}) as typeof Template;

DateInputStoryRequired.args = {
  ...DateInputStory.args,
  classModifier: 'required',
};

export const CustomDateStory = CustomTemplate.bind({}) as typeof CustomTemplate;

CustomDateStory.args = {
  name: 'birthday',
  helpMessage: 'jj/mm/aaaa',
  placeholderText: 'dd/mm/yyyy',
  value: dateStory,
  locale: 'fr',
  format: 'dd/MM/yyyy',
  fixedHeight: true,
  showMonthDropdown: true,
  showYearDropdown: true,
  todayButton: "Aujourd'hui",
  popperPlacement: 'right-start',
  yearDropdownItemNumber: 6,
};
