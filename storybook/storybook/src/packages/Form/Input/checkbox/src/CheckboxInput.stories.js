import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';

import addToStorie from '@axa-fr/storybook-addons';
import {
  CheckboxInput,
  CheckboxItem,
  CheckboxModes,
  Checkbox,
} from '@axa-fr/react-toolkit-form-input-checkbox';
import {
  MessageTypes,
  FieldForm,
  HelpMessage,
  FieldError,
  InputConstants,
} from '@axa-fr/react-toolkit-form-core';

import readme from '@axa-fr/react-toolkit-form-input-checkbox/dist/README.md';

const stories = [];

const options = [
  { label: 'For fun', value: '1', disabled: true, id: 'uniqueId1' },
  { label: 'For work', value: '2', id: 'uniqueId2' },
  { label: 'For drink', value: '3' },
  {
    label: (
      <div>
        <h1>A JSX element</h1>
      </div>
    ),
    value: '4',
  },
];
const values = ['1', '3'];

const modes = [
  CheckboxModes.classic,
  CheckboxModes.default,
  CheckboxModes.inline,
  CheckboxModes.toggle,
];

stories.push({
  desc: 'CheckboxInput',
  component: () => (
    <form className="af-form" name="myform">
      <CheckboxInput
        label={text('label', 'Place type')}
        name={text('name', 'placeType')}
        id={text('id', 'inputuniqueid')}
        mode={select('mode', modes, CheckboxModes.classic)}
        options={options}
        values={values}
        onChange={action('onChange')}
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
  ),
});

stories.push({
  desc: 'CheckboxItem',
  component: () => (
    <form className="af-form" name="myform">
      <CheckboxItem
        name={text('name', 'placeType')}
        id={text('id', 'uniqueid')}
        value={text('value', 'toto')}
        label={text('labe', 'web center forever')}
        onChange={action('onChange')}
        onBlur={action('onBlur')}
        readOnly={boolean('readOnly', false)}
        disabled={boolean('disabled', false)}
        isVisible={boolean('isVisible', true)}
        isChecked={boolean('isChecked', false)}
        classModifier={text('classModifier', '')}
        className={text('className', '')}
      />
    </form>
  ),
});

stories.push({
  desc: 'Checkbox',
  component: () => (
    <form className="af-form" name="myform">
      <FieldForm
        message={text('message', '')}
        messageType={select('messageType', MessageTypes, MessageTypes.error)}
        forceDisplayMessage={boolean('forceDisplayMessage', false)}>
        <div className="col-md-10">
          <Checkbox
            name={text('name', 'placeName')}
            id={text('id', 'uniqueid')}
            onChange={action('onChange')}
            options={options}
            values={values}
            mode={select('mode', modes, CheckboxModes.classic)}
            placeholder={text('placeholder', 'Paris')}
            readOnly={boolean('readOnly', false)}
            disabled={boolean('disabled', false)}
            isVisible={boolean('isVisible', true)}
            classModifier={text('classModifier', '')}
            className={text('className', '')}
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
  desc: 'CheckboxInput Toggle',
  component: () => (
    <form className="af-form" name="myform">
      <CheckboxInput
        label={text('label', 'Do you accept CGU ?')}
        name={text('name', 'cgu')}
        id={text('id', 'inputuniqueid')}
        mode={CheckboxModes.toggle}
        options={[{ value: '1', id: 'uniqueId1' }]}
        values={[1]}
        onChange={action('onChange')}
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
  ),
});

stories.push({
  desc: 'CheckboxItem toggle',
  component: () => (
    <form className="af-form" name="myform">
      <CheckboxItem
        name={text('name', 'placeType')}
        id={text('id', 'uniqueid')}
        value={text('value', 'toto')}
        onChange={action('onChange')}
        onBlur={action('onBlur')}
        readOnly={boolean('readOnly', false)}
        disabled={boolean('disabled', false)}
        isVisible={boolean('isVisible', true)}
        isChecked={boolean('isChecked', false)}
        classModifier={text('classModifier', '')}
        className={text('className', 'af-form__checkbox-toggle')}
      />
    </form>
  ),
});

const storyData = {
  name: 'Form.Input.Checkbox',
  docs: readme,
  stories,
};

addToStorie(storyData, module);
