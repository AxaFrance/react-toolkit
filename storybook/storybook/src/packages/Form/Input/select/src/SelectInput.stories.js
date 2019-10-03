import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';

import addToStorie from '@axa-fr/storybook-addons';
import {
  SelectInput,
  SelectModes,
  Select,
  SelectBase,
} from '@axa-fr/react-toolkit-form-input-select';
import {
  MessageTypes,
  FieldForm,
  HelpMessage,
  FieldError,
  InputConstants,
} from '@axa-fr/react-toolkit-form-core';

import readme from '@axa-fr/react-toolkit-form-input-select/dist/README.md';

const stories = [];

const options = [
  { value: 'fun', label: 'For fun' },
  { value: 'work', label: 'For work' },
  { value: 'drink', label: 'For drink' },
];

stories.push({
  desc: 'SelectInput',
  component: () => (
    <form className="af-form" name="myform">
      <SelectInput
        label={text('label', 'Place type *')}
        name={text('name', 'placeName')}
        id={text('id', 'muid')}
        helpMessage={text('helpMessage', 'Enter the place type')}
        onChange={action('onChange')}
        options={options}
        value={text('value', '')}
        readOnly={boolean('readOnly', false)}
        disabled={boolean('disabled', false)}
        isVisible={boolean('isVisible', true)}
        classModifier={text('classModifier', '')}
        className={text('className', '')}
        placeholder={text('placeholder', '- Select -')}
        message={text('message', '')}
        messageType={select('messageType', MessageTypes, MessageTypes.error)}
        forceDisplayMessage={boolean('forceDisplayMessage', false)}
        mode={select('mode', SelectModes, SelectModes.default)}
        classNameContainerLabel={text(
          'classNameContainerLabel',
          InputConstants.defaultProps.classNameContainerLabel
        )}
        classNameContainerInput={text(
          'classNameContainerInput',
          InputConstants.defaultProps.classNameContainerInput
        )}
        forceDisplayPlaceholder={boolean('forceDisplayPlaceholder', false)}
      />
    </form>
  ),
});

stories.push({
  desc: 'Select',
  component: () => (
    <form className="af-form" name="myform">
      <FieldForm
        message={text('message', '')}
        messageType={select('messageType', MessageTypes, MessageTypes.error)}
        forceDisplayMessage={boolean('forceDisplayMessage', false)}>
        <div className="col-md-4">
          <div className="af-form__select">
            <Select
              name={text('name', 'placeName')}
              id={text('id', 'muid')}
              onChange={action('onChange')}
              options={options}
              value={text('value', '')}
              readOnly={boolean('readOnly', false)}
              disabled={boolean('disabled', false)}
              isVisible={boolean('isVisible', true)}
              classModifier={text('classModifier', '')}
              className={text('className', '')}
              mode={select('mode', SelectModes, SelectModes.default)}
              placeholder={text('placeholder', '- Select -')}
              forceDisplayPlaceholder={boolean(
                'forceDisplayPlaceholder',
                false
              )}
            />
            <HelpMessage
              message={text(
                'helpMessage',
                'Enter the place name, ex : Webcenter'
              )}
            />
            <FieldError />
          </div>
        </div>
      </FieldForm>
    </form>
  ),
});

stories.push({
  desc: 'SelectBase',
  component: () => (
    <form className="af-form" name="myform">
      <div className="af-form__select">
        <SelectBase
          label={text('label', 'Place type *')}
          name={text('name', 'placeType')}
          id={text('id', 'muid')}
          options={options}
          onChange={action('onChange')}
          value={text('value', '')}
          readOnly={boolean('readOnly', false)}
          disabled={boolean('disabled', false)}
          isVisible={boolean('isVisible', true)}
          classModifier={text('classModifier', '')}
          className={text('className', '')}
          placeholder={text('placeholder', '- Select -')}
          forceDisplayPlaceholder={boolean('forceDisplayPlaceholder', false)}
        />
      </div>
    </form>
  ),
});

const storyData = {
  name: 'Form.Input.Select',
  docs: readme,
  stories,
};

addToStorie(storyData, module);
