import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import {
  MultiSelectInput,
  MultiSelect,
} from '@axa-fr/react-toolkit-form-input-select-multi';

import '@axa-fr/react-toolkit-form-input-select-multi/dist/af-select.css';
import {
  MessageTypes,
  FieldForm,
  HelpMessage,
  FieldError,
  InputConstants,
} from '@axa-fr/react-toolkit-form-core';

import readme from '@axa-fr/react-toolkit-form-input-select-multi/dist/README.md';

const options = [
  { value: 'fun', label: 'For fun', clearableValue: false },
  { value: 'work', label: 'For work' },
  { value: 'drink', label: 'For drink' },
  { value: 'sleep', label: 'For sleep' },
  { value: 'swim', label: 'For swim' },
];

const values = ['fun', 'drink'];

const MultiSelectInputStory = () => (
  <form className="af-form" name="myform">
    <MultiSelectInput
      label={text('label', 'Place type')}
      name={text('name', 'placeType')}
      options={options}
      onChange={action('onChange')}
      values={values}
      helpMessage={text('helpMessage', 'Enter the place type')}
      message={text('message', '')}
      messageType={select('messageType', MessageTypes, MessageTypes.error)}
      forceDisplayMessage={boolean('forceDisplayMessage', false)}
      readOnly={boolean('readOnly', false)}
      disabled={boolean('disabled', false)}
      isVisible={boolean('isVisible', true)}
      classModifier={text('classModifier', '')}
      className={text('className', '')}
      placeholder={text('placeholder', 'Select')}
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

const MultiSelectInputStoryRequired = () => (
  <form className="af-form" name="myform">
    <MultiSelectInput
      label={text('label', 'Place type')}
      name={text('name', 'placeType')}
      options={options}
      onChange={action('onChange')}
      values={values}
      helpMessage={text('helpMessage', 'Enter the place type')}
      message={text('message', '')}
      messageType={select('messageType', MessageTypes, MessageTypes.error)}
      forceDisplayMessage={boolean('forceDisplayMessage', false)}
      readOnly={boolean('readOnly', false)}
      disabled={boolean('disabled', false)}
      isVisible={boolean('isVisible', true)}
      classModifier={text('classModifier', 'required')}
      className={text('className', '')}
      placeholder={text('placeholder', 'Select')}
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

const MultiSelectStory = () => (
  <form className="af-form" name="myform">
    <FieldForm
      message={text('message', '')}
      messageType={select('messageType', MessageTypes, MessageTypes.error)}
      forceDisplayMessage={boolean('forceDisplayMessage', false)}>
      <div className="col-md-4">
        <MultiSelect
          name={text('name', 'placeName')}
          onChange={action('onChange')}
          options={options}
          values={values}
          readOnly={boolean('readOnly', false)}
          disabled={boolean('disabled', false)}
          isVisible={boolean('isVisible', true)}
          classModifier={text('classModifier', '')}
          className={text('className', '')}
          placeholder={text('placeholder', 'Select')}
        />
        <HelpMessage
          message={text('helpMessage', 'Enter the place name, ex : Webcenter')}
        />
        <FieldError />
      </div>
    </FieldForm>
  </form>
);

const MultiSelectWithOneValueStory = () => (
  <form className="af-form" name="myform">
    <MultiSelectInput
      label={text('label', 'Place type')}
      name={text('name', 'placeType')}
      options={options}
      onChange={action('onChange')}
      value={text('value', 'fun')}
      helpMessage={text('helpMessage', 'Enter the place type')}
      message={text('message', '')}
      messageType={select('messageType', MessageTypes, MessageTypes.error)}
      forceDisplayMessage={boolean('forceDisplayMessage', false)}
      readOnly={boolean('readOnly', false)}
      disabled={boolean('disabled', false)}
      isVisible={boolean('isVisible', true)}
      classModifier={text('classModifier', '')}
      className={text('className', '')}
      placeholder={text('placeholder', 'Select')}
      classNameContainerLabel={text(
        'classNameContainerLabel',
        InputConstants.defaultProps.classNameContainerLabel
      )}
      classNameContainerInput={text(
        'classNameContainerInput',
        InputConstants.defaultProps.classNameContainerInput
      )}
    />
    <h2 className="af-subtitle">Something Bellow</h2>
  </form>
);

const stories = storiesOf('Form/Input/SelectMulti', module);

stories.addParameters({
  readme: {
    sidebar: readme,
  },
  options: {},
});

stories.add('MultiSelect', MultiSelectStory);
stories.add('MultiSelectInput', MultiSelectInputStory);
stories.add('MultiSelectInput Required', MultiSelectInputStoryRequired);
stories.add('MultiSelect one value', MultiSelectWithOneValueStory);
