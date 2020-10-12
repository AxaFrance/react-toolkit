import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';
import HelpButton from '@axa-fr/react-toolkit-help';
import { storiesOf } from '@storybook/react';
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

const TextInputStory = () => (
  <form className="af-form" name="myform">
    <TextInput
      id={text('id', 'uniqueid')}
      label={text('label', 'Place name')}
      name={text('name', 'placeName')}
      onChange={action('onChange')}
      value={text('value', '')}
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
        Constants.defaultProps.classNameContainerLabel
      )}
      classNameContainerInput={text(
        'classNameContainerInput',
        Constants.defaultProps.classNameContainerInput
      )}>
      <HelpButton>tooltip avec du text</HelpButton>
    </TextInput>
  </form>
);

const TextInputStoryRequired = () => (
  <form className="af-form" name="myform">
    <TextInput
      id={text('id', 'uniqueid')}
      label={text('label', 'Place name')}
      name={text('name', 'placeName')}
      onChange={action('onChange')}
      value={text('value', '')}
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
        Constants.defaultProps.classNameContainerLabel
      )}
      classNameContainerInput={text(
        'classNameContainerInput',
        Constants.defaultProps.classNameContainerInput
      )}>
      <HelpButton>tooltip avec du text</HelpButton>
    </TextInput>
  </form>
);

const TextInputErrorStory = () => (
  <form className="af-form" name="myform">
    <TextInput
      id={text('id', 'uniqueid')}
      label={text('label', 'Place name')}
      name={text('name', 'placeName')}
      onChange={action('onChange')}
      value={text('value', '')}
      helpMessage={text('helpMessage', 'Enter the place name, ex : Webcenter')}
      placeholder={text('placeholder', '')}
      message={text('message', 'Le champ est obligatoire')}
      messageType={select('messageType', MessageTypes, MessageTypes.error)}
      forceDisplayMessage={boolean('forceDisplayMessage', true)}
      readOnly={boolean('readOnly', false)}
      disabled={boolean('disabled', false)}
      isVisible={boolean('isVisible', true)}
      classModifier={text('classModifier', 'required')}
      className={text('className', '')}
      tabIndex={text('tabIndex', '')}
      autoFocus={boolean('autoFocus', false)}
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
);

const TextStory = () => (
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
          message={text('helpMessage', 'Enter the place name, ex : Webcenter')}
        />
      </FieldInput>
      <FieldError />
    </FieldForm>
  </form>
);

const TextErrorStory = () => (
  <form className="af-form" name="myform">
    <FieldForm
      className="col-md-4"
      message={text('message', 'Le champ est obligatoire')}
      messageType={select('messageType', MessageTypes, MessageTypes.error)}
      forceDisplayMessage={boolean('forceDisplayMessage', true)}>
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
          autoFocus={boolean('autoFocus', false)}
        />
        <HelpMessage
          message={text('helpMessage', 'Enter the place name, ex : Webcenter')}
        />
      </FieldInput>
      <FieldError />
    </FieldForm>
  </form>
);

const TextSuccessStory = () => (
  <form className="af-form" name="myform">
    <FieldForm
      className="col-md-4"
      message={text('message', '')}
      messageType={select('messageType', MessageTypes, MessageTypes.error)}
      forceDisplayMessage={boolean('forceDisplayMessage', false)}>
      <FieldInput className="af-form__text af-form__text--success">
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
          autoFocus={boolean('autoFocus', false)}
        />
        <HelpMessage
          message={text('helpMessage', 'Enter the place name, ex : Webcenter')}
        />
      </FieldInput>
      <FieldError />
    </FieldForm>
  </form>
);

const TextDisabledStory = () => (
  <form className="af-form" name="myform">
    <FieldForm
      className="col-md-4"
      message={text('message', '')}
      messageType={select('messageType', MessageTypes, MessageTypes.error)}
      forceDisplayMessage={boolean('forceDisplayMessage', false)}>
      <FieldInput className="af-form__text af-form__text--disabled">
        <Text
          name={text('name', 'placeName')}
          id={text('id', 'uniqueid')}
          onChange={action('onChange')}
          value={text('value', 'Robert')}
          placeholder={text('placeholder', 'Paris')}
          readOnly={boolean('readOnly', false)}
          disabled={boolean('disabled', true)}
          isVisible={boolean('isVisible', true)}
          classModifier={text('classModifier', '')}
          className={text('className', '')}
          tabIndex={text('tabIndex', null)}
          autoFocus={boolean('autoFocus', false)}
        />
        <HelpMessage
          message={text('helpMessage', 'Enter the place name, ex : Webcenter')}
        />
      </FieldInput>
      <FieldError />
    </FieldForm>
  </form>
);

const stories = storiesOf('Form/Input/Text', module);

stories.addParameters({
  readme: {
    sidebar: readme,
  },
  options: {},
});

stories.add('Text', TextStory);
stories.add('Text Error', TextErrorStory);
stories.add('Text Success', TextSuccessStory);
stories.add('Text Disabled', TextDisabledStory);
stories.add('TextInput', TextInputStory);
stories.add('TextInput Required', TextInputStoryRequired);
stories.add('TextInput Error', TextInputErrorStory);
