import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';
import moment from 'moment';
import { storiesOf } from '@storybook/react';
import { DateInput, CustomDate } from '@axa-fr/react-toolkit-form-input-date';
import {
  MessageTypes,
  FieldForm,
  HelpMessage,
  FieldError,
  InputConstants,
} from '@axa-fr/react-toolkit-form-core';
import readme from '@axa-fr/react-toolkit-form-input-date/dist/README.md';

const DateInputStory = () => (
  <form className="af-form" name="myform">
    <DateInput
      label={text('label', 'Place name')}
      name={text('name', 'placeName')}
      id={text('id', 'uniqueid')}
      locale={text('locale', 'fr-fr')}
      value={moment('11/26/2017', 'MM/DD/YYYY')}
      onChange={action('onChange')}
      helpMessage={text('helpMessage', 'jj/mm/aaaa')}
      message={text('message', '')}
      messageType={select('messageType', MessageTypes, MessageTypes.success)}
      forceDisplayMessage={boolean('forceDisplayMessage', false)}
      readOnly={boolean('readOnly', false)}
      disabled={boolean('disabled', false)}
      isVisible={boolean('isVisible', true)}
      classModifier={text('classModifier', '')}
      className={text('className', '')}
      classNameContainerLabel={text(
        'classNameContainerLabel',
        InputConstants.defaultProps.classNameContainerLabel
      )}
      classNameContainerInput={text(
        'classNameContainerInput',
        InputConstants.defaultProps.classNameContainerInput
      )}
      fixedHeight
      showMonthDropdown
      showYearDropdown
      autoFocus={false}
      todayButton={text('todayButton', "Aujourd'hui")}
      popperPlacement="right-start"
      yearDropdownItemNumber={6}
    />
  </form>
);

const DateInputStoryRequired = () => (
  <form className="af-form" name="myform">
    <DateInput
      label={text('label', 'Place name')}
      name={text('name', 'placeName')}
      id={text('id', 'uniqueid')}
      locale={text('locale', 'fr-fr')}
      value={moment('11/26/2017', 'MM/DD/YYYY')}
      onChange={action('onChange')}
      helpMessage={text('helpMessage', 'jj/mm/aaaa')}
      message={text('message', '')}
      messageType={select('messageType', MessageTypes, MessageTypes.success)}
      forceDisplayMessage={boolean('forceDisplayMessage', false)}
      readOnly={boolean('readOnly', false)}
      disabled={boolean('disabled', false)}
      isVisible={boolean('isVisible', true)}
      classModifier={text('classModifier', 'required')}
      className={text('className', '')}
      classNameContainerLabel={text(
        'classNameContainerLabel',
        InputConstants.defaultProps.classNameContainerLabel
      )}
      classNameContainerInput={text(
        'classNameContainerInput',
        InputConstants.defaultProps.classNameContainerInput
      )}
      fixedHeight
      showMonthDropdown
      showYearDropdown
      autoFocus={false}
      todayButton={text('todayButton', "Aujourd'hui")}
      popperPlacement="right-start"
      yearDropdownItemNumber={6}
    />
  </form>
);

const CustomDateStory = () => (
  <form className="af-form" name="myform">
    <FieldForm
      message={text('message', '')}
      messageType={select('messageType', MessageTypes, MessageTypes.error)}
      forceDisplayMessage={boolean('forceDisplayMessage', false)}>
      <div className="col-md-10">
        <div className="af-datepicker__container">
          <CustomDate
            name={text('name', 'date')}
            onChange={action('onChange')}
            id={text('id', 'uniqueid')}
            value={moment('11/26/2017', 'MM/DD/YYYY')}
            placeholder={text('placeholder', '12/08/2017')}
            readOnly={boolean('readOnly', false)}
            disabled={boolean('disabled', false)}
            isVisible={boolean('isVisible', true)}
            classModifier={text('classModifier', '')}
            className={text('className', '')}
            fixedHeight
            showMonthDropdown
            showYearDropdown
            autoFocus={false}
            todayButton={text('todayButton', "Aujourd'hui")}
            popperPlacement="right-start"
            yearDropdownItemNumber={6}
          />
          <span className="glyphicon glyphicon-calendar" />
        </div>
        <HelpMessage message={text('helpMessage', 'jj/mm/aaaa')} />
        <FieldError />
      </div>
    </FieldForm>
  </form>
);

const stories = storiesOf('Form/Input/Date', module);

stories.addParameters({
  readme: {
    sidebar: readme,
  },
  options: {},
});

stories.add('DateInputStory', DateInputStory);
stories.add('DateInputStory Required', DateInputStoryRequired);
stories.add('CustomDateStory', CustomDateStory);
