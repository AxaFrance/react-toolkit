import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';
import addToStorie from '@axa-fr/storybook-addons';
import { MessageTypes } from '@axa-fr/react-toolkit-form-core';
import { SwitchInput } from '@axa-fr/react-toolkit-form-input-switch';

const readme = require('@axa-fr/react-toolkit-form-input-switch/dist/README.md');

const stories = [];

const LABELS = {
  name: 'Form.SwitchInput',
  desc: 'Switch',
  mdFile: 'Form/SwitchInput/Switch',
  SwitchInput: {
    import: 'Switch',
    mdFile: 'Form/SwitchInput/Switch',
    name: 'placeName',
    disabled: false,
    isVisible: true,
    classModifier: '',
    className: '',
    values: ['0', '1', '2', '3'],
    defaultValue: '3',
    choice: {
      id1: 'check0',
      item1: 'Choix 1',
      value1: '0',
      id2: 'check1',
      item2: 'Choix 2',
      value2: '1',
      id3: 'check2',
      item3: 'Choix 3',
      value3: '2',
      id4: 'check3',
      item4: 'Choix 44444444444444',
      value4: '3',
    },
  },
};

const KNOBS_LABELS = {
  SwitchInput: {
    label: 'label',
    name: 'name',
    value: 'value',
    readOnly: 'readOnly',
    disabled: 'disabled',
    isVisible: 'isVisible',
    classModifier: 'classModifier',
    className: 'className',
  },
};

const options = [
  {
    id: LABELS.SwitchInput.choice.id1,
    label: LABELS.SwitchInput.choice.item1,
    value: LABELS.SwitchInput.choice.value1,
  },
  {
    id: LABELS.SwitchInput.choice.id2,
    label: LABELS.SwitchInput.choice.item2,
    value: LABELS.SwitchInput.choice.value2,
  },
  {
    id: LABELS.SwitchInput.choice.id3,
    label: LABELS.SwitchInput.choice.item3,
    value: LABELS.SwitchInput.choice.value3,
  },
  {
    id: LABELS.SwitchInput.choice.id4,
    label: LABELS.SwitchInput.choice.item4,
    value: LABELS.SwitchInput.choice.value4,
  },
];

stories.push({
  desc: 'SwitchInput',

  component: () => (
    <SwitchInput
      label={text('label', 'Select a choice')}
      name={text(KNOBS_LABELS.SwitchInput.name, LABELS.SwitchInput.name)}
      value={select(
        KNOBS_LABELS.SwitchInput.value,
        LABELS.SwitchInput.values,
        LABELS.SwitchInput.defaultValue
      )}
      disabled={boolean(
        KNOBS_LABELS.SwitchInput.disabled,
        LABELS.SwitchInput.disabled
      )}
      isVisible={boolean(
        KNOBS_LABELS.SwitchInput.isVisible,
        LABELS.SwitchInput.isVisible
      )}
      classModifier={text(
        KNOBS_LABELS.SwitchInput.classModifier,
        LABELS.SwitchInput.classModifier
      )}
      className={text(
        KNOBS_LABELS.SwitchInput.className,
        LABELS.SwitchInput.className
      )}
      options={options}
      onChange={action('onChange')}
      message={text('message', '')}
      messageType={select('messageType', MessageTypes, MessageTypes.error)}
      forceDisplayMessage={boolean('forceDisplayMessage', false)}
    />
  ),
});

const storyData = {
  name: 'Form.Input.Switch',
  docs: readme,
  stories,
};

addToStorie(storyData, module);
