import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';

import addToStorie from '@axa-fr/storybook-addons';
import {
  Textarea,
  TextareaInput,
} from '@axa-fr/react-toolkit-form-input-textarea';
import {
  MessageTypes,
  FieldForm,
  HelpMessage,
  FieldError,
  InputConstants,
} from '@axa-fr/react-toolkit-form-core';

import readme from '@axa-fr/react-toolkit-form-input-textarea/dist/README.md';

const stories = [];

stories.push({
  desc: 'TextareaInput',
  component: () => (
    <form className="af-form" name="myform">
      <TextareaInput
        label={text('label', 'Place type *')}
        name={text('name', 'placeType')}
        id={text('id', 'uinqid')}
        onChange={action('onChange')}
        value={text('value', '')}
        rows={number('rows', 6)}
        cols={number('cols', 60)}
        placeholder={text('placeholder', '')}
        helpMessage={text('helpMessage', 'Enter the place type')}
        message={text('message', '')}
        messageType={select('messageType', MessageTypes, MessageTypes.error)}
        forceDisplayMessage={boolean('forceDisplayMessage', false)}
        readOnly={boolean('readOnly', false)}
        disabled={boolean('disabled', false)}
        isVisible={boolean('isVisible', true)}
        classModifier={text('classModifier', '')}
        className={text('className', '')}
        tabIndex={text('tabIndex', null)}
        autoFocus={boolean('autoFocus', true)}
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
  desc: 'Textarea',
  component: () => (
    <form className="af-form" name="myform">
      <FieldForm
        message={text('message', '')}
        messageType={select('messageType', MessageTypes, MessageTypes.error)}
        forceDisplayMessage={boolean('forceDisplayMessage', false)}>
        <div className="col-md-4">
          <Textarea
            name={text('name', 'placeName')}
            id={text('id', 'uinqid')}
            onChange={action('onChange')}
            value={text('value', '')}
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
          <FieldError />
        </div>
      </FieldForm>
    </form>
  ),
});

const storyData = {
  name: 'Form.Input.Textarea',
  docs: readme,
  stories,
};

addToStorie(storyData, module);
