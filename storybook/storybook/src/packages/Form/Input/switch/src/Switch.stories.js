import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { MessageTypes } from '@axa-fr/react-toolkit-form-core';
import { Switch, SwitchInput } from '@axa-fr/react-toolkit-form-input-switch';
import readme from '@axa-fr/react-toolkit-form-input-switch/dist/README.md';

const LABELS = {
  name: 'Form.SwitchInput',
  desc: 'Switch',
  SwitchInput: {
    import: 'Switch',
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
    label: LABELS.SwitchInput.choice.item4,
    value: LABELS.SwitchInput.choice.value4,
  },
];

const SwitchStory = () => (
  <Switch
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
  />
);

const SwitchInputStory = () => (
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
);

const SwitchInputStoryRequired = () => (
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
      'required'
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
);

const stories = storiesOf('Form/Input/Switch', module);

stories.addParameters({
  readme: {
    sidebar: readme,
  },
  options: {},
});

stories.add('Switch', SwitchStory);
stories.add('SwitchInput', SwitchInputStory);
stories.add('SwitchInput Required', SwitchInputStoryRequired);
