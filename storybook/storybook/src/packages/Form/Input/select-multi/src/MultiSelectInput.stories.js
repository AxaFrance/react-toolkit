import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';

import addToStorie from '@axa-fr/storybook-addons';
import {
  MultiSelectInput,
  MultiSelect,
} from '@axa-fr/react-toolkit-form-input-select-multi';
import {
  MessageTypes,
  FieldForm,
  HelpMessage,
  FieldError,
  InputConstants,
} from '@axa-fr/react-toolkit-form-core';

const readme = require('@axa-fr/react-toolkit-form-input-select-multi/dist/README.md');

const stories = [];

const options = [
  { value: 'fun', label: 'For fun', clearableValue: false },
  { value: 'work', label: 'For work' },
  { value: 'drink', label: 'For drink' },
  { value: 'sleep', label: 'For sleep' },
  { value: 'swim', label: 'For swim' },
];

const values = ['fun', 'drink'];

stories.push({
  desc: 'MultiSelectInput',
  component: () => (
    <form className="af-form" name="myform">
      <MultiSelectInput
        label={text('label', 'Place type *')}
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
  ),
});

stories.push({
  desc: 'MultiSelect',
  component: () => (
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

stories.push({
  desc: 'MultiSelect one value',
  component: () => (
    <form className="af-form" name="myform">
      <MultiSelectInput
        label={text('label', 'Place type *')}
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
    </form>
  ),
});

const storyData = {
  name: 'Form.Input.SelectMulti',
  docs: readme,
  stories,
};

addToStorie(storyData, module);
