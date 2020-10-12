import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, number, boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { Number, NumberInput } from '@axa-fr/react-toolkit-form-input-number';
import Help from '@axa-fr/react-toolkit-help';
import {
  MessageTypes,
  FieldForm,
  HelpMessage,
  FieldError,
  InputConstants,
} from '@axa-fr/react-toolkit-form-core';
import readme from '@axa-fr/react-toolkit-form-input-number/dist/README.md';

const NumberInputStory = () => (
  <form className="af-form" name="myform">
    <NumberInput
      label={text('label', 'Place name')}
      name={text('name', 'placeName')}
      id={text('id', 'uniqueid')}
      onChange={action('onChange')}
      value={number('value', null)}
      viewValue={text('viewValue', '')}
      helpMessage={text('helpMessage', 'Enter the place name, ex : Webcenter')}
      placeholder={text('placeholder', '')}
      message={text('message', '')}
      messageType={select('messageType', MessageTypes, MessageTypes.error)}
      forceDisplayMessage={boolean('forceDisplayMessage', false)}
      readOnly={boolean('readOnly', false)}
      disabled={boolean('disabled', false)}
      isVisible={boolean('isVisible', true)}
      classModifier={text('classModifier', '')}
      className={text('className', '')}
      tabIndex={text('tabIndex', '')}
      autoFocus={boolean('autoFocus', true)}
      classNameContainerLabel={text(
        'classNameContainerLabel',
        InputConstants.defaultProps.classNameContainerLabel
      )}
      classNameContainerInput={text(
        'classNameContainerInput',
        InputConstants.defaultProps.classNameContainerInput
      )}>
      <Help>tooltip avec du text</Help>
    </NumberInput>
  </form>
);

const NumberInputStoryRequired = () => (
  <form className="af-form" name="myform">
    <NumberInput
      label={text('label', 'Place name')}
      name={text('name', 'placeName')}
      id={text('id', 'uniqueid')}
      onChange={action('onChange')}
      value={number('value', null)}
      viewValue={text('viewValue', '')}
      helpMessage={text('helpMessage', 'Enter the place name, ex : Webcenter')}
      placeholder={text('placeholder', '')}
      message={text('message', '')}
      messageType={select('messageType', MessageTypes, MessageTypes.error)}
      forceDisplayMessage={boolean('forceDisplayMessage', false)}
      readOnly={boolean('readOnly', false)}
      disabled={boolean('disabled', false)}
      isVisible={boolean('isVisible', true)}
      classModifier={text('classModifier', 'required')}
      className={text('className', '')}
      tabIndex={text('tabIndex', '')}
      autoFocus={boolean('autoFocus', true)}
      classNameContainerLabel={text(
        'classNameContainerLabel',
        InputConstants.defaultProps.classNameContainerLabel
      )}
      classNameContainerInput={text(
        'classNameContainerInput',
        InputConstants.defaultProps.classNameContainerInput
      )}>
      <Help>tooltip avec du text</Help>
    </NumberInput>
  </form>
);

const NumberStory = () => (
  <form className="af-form" name="myform">
    <FieldForm
      message={text('message', '')}
      messageType={select('messageType', MessageTypes, MessageTypes.error)}
      forceDisplayMessage={boolean('forceDisplayMessage', false)}>
      <div className="col-md-4">
        <Number
          id={text('id', 'uniqueid')}
          name={text('name', 'placeName')}
          onChange={action('onChange')}
          value={number('value', 2.9)}
          viewValue={text('viewValue', '2.9')}
          placeholder={text('placeholder', 'Paris')}
          readOnly={boolean('readOnly', false)}
          disabled={boolean('disabled', false)}
          isVisible={boolean('isVisible', true)}
          classModifier={text('classModifier', '')}
          className={text('className', '')}
          tabIndex={text('tabIndex', '')}
          autoFocus={boolean('autoFocus', true)}
        />
        <HelpMessage
          message={text('helpMessage', 'Enter the place name, ex : Webcenter')}
        />
        <FieldError />
      </div>
    </FieldForm>
  </form>
);

const stories = storiesOf('Form/Input/Number', module);

stories.addParameters({
  readme: {
    sidebar: readme,
  },
  options: {},
});

stories.add('Number', NumberStory);
stories.add('NumberInput', NumberInputStory);
stories.add('NumberInput Required', NumberInputStoryRequired);
