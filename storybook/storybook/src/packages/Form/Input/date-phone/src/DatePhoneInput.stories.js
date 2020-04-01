import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';
import moment from 'moment';

import addToStorie from '@axa-fr/storybook-addons';
import { DatePhoneInput, DatePhone } from '@axa-fr/react-toolkit-form-input-date-phone';
import {
  MessageTypes,
  FieldForm,
  HelpMessage,
  FieldError,
  InputConstants,
} from '@axa-fr/react-toolkit-form-core';

import readme from '@axa-fr/react-toolkit-form-input-date-phone/dist/README.md';

const stories = [];

stories.push({
  desc: 'DatePhoneInput',
  component: () => (
    <form className="af-form" name="myform">
      <DatePhoneInput
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
      />
    </form>
  ),
});

stories.push({
  desc: 'DatePhone',
  component: () => (
    <form className="af-form" name="myform">
      <FieldForm
        message={text('message', '')}
        messageType={select('messageType', MessageTypes, MessageTypes.error)}
        forceDisplayMessage={boolean('forceDisplayMessage', false)}>
        <div className="col-md-10">
          <DatePhone
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
          />
          <HelpMessage message={text('helpMessage', 'jj/mm/aaaa')} />
          <FieldError />
        </div>
      </FieldForm>
    </form>
  ),
});

const storyData = {
  name: 'Form.Input.DatePhone',
  docs: readme,
  stories,
};

addToStorie(storyData, module);
