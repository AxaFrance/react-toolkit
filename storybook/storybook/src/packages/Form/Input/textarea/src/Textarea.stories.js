import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
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

const TextareaInputStory = () => (
  <form className="af-form" name="myform">
    <TextareaInput
      label={text('label', 'Place type')}
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
);

const TextareaInputStoryRequired = () => (
  <form className="af-form" name="myform">
    <TextareaInput
      label={text('label', 'Place type')}
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
      classModifier={text('classModifier', 'required')}
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
);

const TextareaStory = () => (
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
          message={text('helpMessage', 'Enter the place name, ex : Webcenter')}
        />
        <FieldError />
      </div>
    </FieldForm>
  </form>
);

const stories = storiesOf('Form/Input/Textarea', module);

stories.addParameters({
  readme: {
    sidebar: readme,
  },
  options: {},
});

stories.add('Textarea', TextareaStory);
stories.add('TextareaInput', TextareaInputStory);
stories.add('TextareaInput Required', TextareaInputStoryRequired);
