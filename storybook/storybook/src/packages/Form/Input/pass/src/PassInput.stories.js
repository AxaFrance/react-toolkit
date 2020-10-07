import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';
import HelpButton from '@axa-fr/react-toolkit-help';
import { storiesOf } from '@storybook/react';
import {
  PassInput,
  Pass,
  typesField,
  strengthList,
} from '@axa-fr/react-toolkit-form-input-pass';
import {
  MessageTypes,
  FieldForm,
  HelpMessage,
  FieldError,
  InputConstants,
  FieldInput,
} from '@axa-fr/react-toolkit-form-core';
import readme from '@axa-fr/react-toolkit-form-input-pass/dist/README.md';

const PassStory = () => (
  <form className="af-form" name="myform">
    <FieldForm
      className="col-md-4"
      message={text('message', '')}
      messageType={select('messageType', MessageTypes, MessageTypes.error)}
      forceDisplayMessage={boolean('forceDisplayMessage', false)}>
      <FieldInput className="af-form__pass-container">
        <Pass
          name={text('name', 'password')}
          id={text('id', 'uniqueid')}
          type={select(
            'type',
            [typesField.PASSWORD, typesField.TEXT],
            typesField.PASSWORD
          )}
          onChange={action('onChange')}
          onToggleType={action('onToggleType')}
          value={text('value', '')}
          readOnly={boolean('readOnly', false)}
          disabled={boolean('disabled', false)}
          isVisible={boolean('isVisible', true)}
          classModifier={select(
            'classModifier',
            [
              strengthList[0],
              strengthList[1],
              strengthList[2],
              strengthList[3],
              strengthList[4],
            ],
            strengthList[0]
          )}
          className={text('className', 'af-form__pass')}
          tabIndex={text('tabIndex', null)}
          autoFocus={boolean('autoFocus', true)}
        />
        <HelpMessage message={text('helpMessage', 'Enter password')} />
      </FieldInput>
      <FieldError />
    </FieldForm>
  </form>
);

const PassInputStory = () => (
  <form className="af-form" name="myform">
    <div>
      <PassInput
        id={text('id', 'uniqueid')}
        score={select('score', [null, 0, 1, 2, 3, 4], 0)}
        label={text('label', 'Password')}
        name={text('name', 'password')}
        onChange={action('onChange')}
        onToggleType={action('onToggleType')}
        value={text('value', '')}
        helpMessage={text('helpMessage', '8 caractères minimum')}
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
        <HelpButton>Choose a password</HelpButton>
      </PassInput>
    </div>
  </form>
);

const PassInputStoryRequired = () => (
  <form className="af-form" name="myform">
    <div>
      <PassInput
        id={text('id', 'uniqueid')}
        score={select('score', [null, 0, 1, 2, 3, 4], 0)}
        label={text('label', 'Password')}
        name={text('name', 'password')}
        onChange={action('onChange')}
        onToggleType={action('onToggleType')}
        value={text('value', '')}
        helpMessage={text('helpMessage', '8 caractères minimum')}
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
        <HelpButton>Choose a password</HelpButton>
      </PassInput>
    </div>
  </form>
);

const stories = storiesOf('Form/Input/Pass', module);

stories.addParameters({
  readme: {
    sidebar: readme,
  },
  options: {},
});

stories.add('Pass', PassStory);
stories.add('PassInput', PassInputStory);
stories.add('PassInput Required', PassInputStoryRequired);
