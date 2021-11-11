import React from 'react';
import { action } from '@storybook/addon-actions';
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

const commonProps = {
  name: 'placeName',
  id: 'uniqueid',
  locale: 'fr-fr',
  value: new Date('02/25/2010'),
  onChange: action('onChange'),
  readOnly: false,
  disabled: false,
  isVisible: true,
  className: '',
  classModifier: '',
};

const DatePhoneInputStory = () => (
  <form className="af-form" name="myform">
    <DatePhoneInput
      {...commonProps}
      label="Place name"
      helpMessage="jj/mm/aaaa"
      message=""
      messageType={MessageTypes.success}
      forceDisplayMessage={false}
      classNameContainerLabel={
        InputConstants.defaultProps.classNameContainerLabel
      }
      classNameContainerInput={
        InputConstants.defaultProps.classNameContainerInput
      }
    />
  </form>
);

const DatePhoneInputStoryRequired = () => (
  <form className="af-form" name="myform">
    <DatePhoneInput
      {...commonProps}
      label="Place name"
      helpMessage="jj/mm/aaaa"
      message=""
      messageType={MessageTypes.success}
      forceDisplayMessage={false}
      classModifier="required"
      classNameContainerLabel={
        InputConstants.defaultProps.classNameContainerLabel
      }
      classNameContainerInput={
        InputConstants.defaultProps.classNameContainerInput
      }
    />
  </form>
);

const DatePhoneStory = () => (
  <form className="af-form" name="myform">
    <FieldForm
      message=""
      messageType={MessageTypes.error}
      forceDisplayMessage={false}>
      <div className="col-md-10">
        <DatePhone {...commonProps} name="date" placeholder="12/08/2017" />
        <HelpMessage message="jj/mm/aaaa" />
        <FieldError />
      </div>
    </FieldForm>
  </form>
);

const stories = storiesOf('Form elements/Datephone', module);
stories.addParameters({
  readme: {
    sidebar: readme,
  },
  options: {},
});
stories.add('DatePhone', DatePhoneStory);
stories.add('DatePhoneInput', DatePhoneInputStory);
stories.add('DatePhoneInput Required', DatePhoneInputStoryRequired);
