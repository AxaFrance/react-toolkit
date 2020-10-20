import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import moment from 'moment';
import { storiesOf } from '@storybook/react';
import {
  FieldError,
  FieldForm,
  HelpMessage,
  InputConstants,
  MessageTypes,
} from '@axa-fr/react-toolkit-form-core';
import DatePhone from './DatePhone';
import DatePhoneInput from './DatePhoneInput';
import readme from '../README.md';

const DatePhoneInputStory = () => (
  <form className="af-form" name="myform">
    <DatePhoneInput
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
    />
  </form>
);

const DatePhoneInputStoryRequired = () => (
  <form className="af-form" name="myform">
    <DatePhoneInput
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
    />
  </form>
);

const DatePhoneStory = () => (
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
);
const stories = storiesOf('Form/Input/DatePhone', module);
stories.addParameters({
  readme: {
    sidebar: readme,
  },
  options: {},
});
stories.add('DatePhone', DatePhoneStory);
stories.add('DatePhoneInput', DatePhoneInputStory);
stories.add('DatePhoneInput Required', DatePhoneInputStoryRequired);
