import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';
import moment from 'moment';

import addToStorie from '@axa-fr/storybook-addons';
import { DateInput, CustomDate } from '@axa-fr/react-toolkit-form-input-date';
import {
  MessageTypes,
  FieldForm,
  HelpMessage,
  FieldError,
  InputConstants,
} from '@axa-fr/react-toolkit-form-core';

const stories = [];

stories.push({
  desc: 'DateInput',
  docs: require('./InputDate.md'),
  component: () => (
    <form className="af-form" name="myform">
      <DateInput
        label={text('label', 'Place name *')}
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
  ),
});

stories.push({
  desc: 'CustomDate',
  docs: require('./CustomDate.md'),
  component: () => (
    <form className="af-form" name="myform">
      <FieldForm
        message={text('message', '')}
        messageType={select('messageType', MessageTypes, MessageTypes.error)}
        forceDisplayMessage={boolean('forceDisplayMessage', false)}>
        <div className="col-md-10">
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
          <HelpMessage message={text('helpMessage', 'jj/mm/aaaa')} />
          <FieldError />
        </div>
      </FieldForm>
    </form>
  ),
});

const storyData = {
  name: 'Form.Input.Date',
  stories,
};

addToStorie(storyData, module);
