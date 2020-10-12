import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { ChoiceInput, Choice } from '@axa-fr/react-toolkit-form-input-choice';
import {
  MessageTypes,
  FieldForm,
  HelpMessage,
  FieldError,
  InputConstants,
} from '@axa-fr/react-toolkit-form-core';
import readme from '@axa-fr/react-toolkit-form-input-choice/dist/README.md';

const ChoiceInputStory = () => (
  <form className="af-form" name="myform">
    <ChoiceInput
      label={text('label', 'Place type')}
      name={text('name', 'placeType')}
      id={text('id', 'uniqueid')}
      onChange={action('onChange')}
      value={boolean('value', null)}
      helpMessage={text('helpMessage', 'Enter the place type')}
      message={text('message', '')}
      messageType={select('messageType', MessageTypes, MessageTypes.error)}
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

const ChoiceInputStoryRequired = () => (
  <form className="af-form" name="myform">
    <ChoiceInput
      label={text('label', 'Place type')}
      name={text('name', 'placeType')}
      id={text('id', 'uniqueid')}
      onChange={action('onChange')}
      value={boolean('value', null)}
      helpMessage={text('helpMessage', 'Enter the place type')}
      message={text('message', '')}
      messageType={select('messageType', MessageTypes, MessageTypes.error)}
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

const ChoiceStory = () => (
  <form className="af-form" name="myform">
    <FieldForm
      message={text('message', '')}
      messageType={select('messageType', MessageTypes, MessageTypes.error)}
      forceDisplayMessage={boolean('forceDisplayMessage', false)}>
      <div className="col-md-10">
        <Choice
          name={text('name', 'placeName')}
          onChange={action('onChange')}
          value={boolean('value', null)}
          placeholder={text('placeholder', 'Paris')}
          readOnly={boolean('readOnly', false)}
          disabled={boolean('disabled', false)}
          isVisible={boolean('isVisible', true)}
          classModifier={text('classModifier', '')}
          className={text('className', '')}
        />
        <HelpMessage
          message={text('helpMessage', 'Enter the place name, ex : Webcenter')}
        />
        <FieldError />
      </div>
    </FieldForm>
  </form>
);

const stories = storiesOf('Form/Input/Choice', module);

stories.addParameters({
  readme: {
    sidebar: readme,
  },
  options: {},
});

stories.add('ChoiceInput', ChoiceInputStory);
stories.add('ChoiceInput Required', ChoiceInputStoryRequired);
stories.add('Choice', ChoiceStory);
