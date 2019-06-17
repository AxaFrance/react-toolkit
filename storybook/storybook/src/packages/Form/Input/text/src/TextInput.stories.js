import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';

import HelpButton from '@axa-fr/react-toolkit-help';
import addToStorie from '@axa-fr/storybook-addons';
import { TextInput, Text } from '@axa-fr/react-toolkit-form-input-text';
import {
  MessageTypes,
  FieldForm,
  HelpMessage,
  FieldError,
  InputConstants as Constants,
  FieldInput,
} from '@axa-fr/react-toolkit-form-core';

import readme from '@axa-fr/react-toolkit-form-input-text/dist/README.md';

const stories = [];

stories.push({
  desc: 'TextInput',
  component: () => (
    <form className="af-form" name="myform">
      <TextInput
        id={text('id', 'uniqueid')}
        label={text('label', 'Place name *')}
        name={text('name', 'placeName')}
        onChange={action('onChange')}
        value={text('value', '')}
        helpMessage={text(
          'helpMessage',
          'Enter the place name, ex : Webcenter'
        )}
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
          Constants.defaultProps.classNameContainerLabel
        )}
        classNameContainerInput={text(
          'classNameContainerInput',
          Constants.defaultProps.classNameContainerInput
        )}>
        <HelpButton>tooltip avec du text</HelpButton>
      </TextInput>
    </form>
  ),
});

stories.push({
  desc: 'Text',
  component: () => (
    <form className="af-form" name="myform">
      <FieldForm
        className="col-md-4"
        message={text('message', '')}
        messageType={select('messageType', MessageTypes, MessageTypes.error)}
        forceDisplayMessage={boolean('forceDisplayMessage', false)}>
        <FieldInput className="af-form__text">
          <Text
            name={text('name', 'placeName')}
            id={text('id', 'uniqueid')}
            onChange={action('onChange')}
            value={text('value', 'Robert')}
            placeholder={text('placeholder', 'Paris')}
            readOnly={boolean('readOnly', false)}
            disabled={boolean('disabled', false)}
            isVisible={boolean('isVisible', true)}
            classModifier={text('classModifier', '')}
            className={text('className', '')}
            tabIndex={text('tabIndex', null)}
            autoFocus={boolean('autoFocus', true)}
          />
          <HelpMessage
            message={text(
              'helpMessage',
              'Enter the place name, ex : Webcenter'
            )}
          />
        </FieldInput>
        <FieldError />
      </FieldForm>
    </form>
  ),
});

const storyData = {
  name: 'Form.Input.Text',
  docs: readme,
  stories,
};

addToStorie(storyData, module);
