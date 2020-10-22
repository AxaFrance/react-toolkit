import * as React from 'react';
import {
  FieldForm,
  HelpMessage,
  FieldError,
} from '@axa-fr/react-toolkit-form-core';
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
};

const Template = (args) => <DateInput {...args} />;
const CustomTemplate = ({
  message,
  forceDisplayMessage,
  args,
  helpMessage,
}) => (
  <FieldForm message={message} forceDisplayMessage={forceDisplayMessage}>
    <div className="col-md-10">
      <div className="af-datepicker__container">
        <CustomDate {...args} />
        <span className="glyphicon glyphicon-calendar" />
      </div>
      <HelpMessage message={helpMessage} />
      <FieldError />
    </div>
  </FieldForm>
);

const dateStory = new Date('02/25/2010');

export const DateInputStory = Template.bind({});
export const DateInputStoryRequired = Template.bind({});
export const CustomDateStory = CustomTemplate.bind({});

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

DateInputStoryRequired.args = {
  ...DateInputStory.args,
  classModifier: 'required',
};

CustomDateStory.args = {
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
