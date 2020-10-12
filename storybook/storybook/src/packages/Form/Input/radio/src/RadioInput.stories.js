import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import {
  RadioModes,
  RadioItem,
  Radio,
  RadioInput,
} from '@axa-fr/react-toolkit-form-input-radio';
import HelpButton from '@axa-fr/react-toolkit-help';
import {
  MessageTypes,
  FieldForm,
  HelpMessage,
  FieldError,
  InputConstants,
} from '@axa-fr/react-toolkit-form-core';
import readme from '@axa-fr/react-toolkit-form-input-radio/dist/README.md';

const options = [
  { label: 'For fun', value: '1' },
  { label: 'For work', value: '2', id: 'customId' },
  { label: 'For drink', value: '3' },
  { label: 'For the life', value: '4', disabled: true },
];
const modes = [RadioModes.classic, RadioModes.default, RadioModes.inline];

const RadioInputStory = () => (
  <form className="af-form" name="myform">
    <RadioInput
      label={text('label', 'Place type')}
      name={text('name', 'placeType')}
      id={text('id', '')}
      options={options}
      onChange={action('onChange')}
      mode={select('mode', modes, RadioModes.default)}
      value={text('value', '')}
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

const RadioInputStoryRequired = () => (
  <form className="af-form" name="myform">
    <RadioInput
      label={text('label', 'Place type')}
      name={text('name', 'placeType')}
      id={text('id', '')}
      options={options}
      onChange={action('onChange')}
      mode={select('mode', modes, RadioModes.default)}
      value={text('value', '')}
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

const RadioClassicInputStory = () => (
  <form className="af-form" name="myform">
    <RadioInput
      label={text('label', 'Place type')}
      name={text('name', 'placeType')}
      id={text('id', '')}
      options={options}
      onChange={action('onChange')}
      mode={select('mode', modes, RadioModes.classic)}
      value={text('value', '')}
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

const RadioInlineInputStory = () => (
  <form className="af-form" name="myform">
    <RadioInput
      label={text('label', 'Place type')}
      name={text('name', 'placeType')}
      id={text('id', '')}
      options={options}
      onChange={action('onChange')}
      mode={select('mode', modes, RadioModes.inline)}
      value={text('value', '')}
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

const RadioInputWithChildrenStory = () => (
  <form className="af-form" name="myform">
    <RadioInput
      label={text('label', 'Place type')}
      name={text('name', 'placeType')}
      id={text('id', '')}
      options={options}
      onChange={action('onChange')}
      mode={select('mode', modes, RadioModes.default)}
      value={text('value', '')}
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
      )}>
      <HelpButton mode="hover" classModifier="small">
        Hello Radio
      </HelpButton>
    </RadioInput>
  </form>
);

const RadioStory = () => (
  <form className="af-form" name="myform">
    <FieldForm
      message={text('message', '')}
      messageType={select('messageType', MessageTypes, MessageTypes.error)}
      forceDisplayMessage={boolean('forceDisplayMessage', false)}>
      <div className="col-md-10">
        <Radio
          name={text('name', 'placeName')}
          id={text('id', '')}
          onChange={action('onChange')}
          options={options}
          mode={select('mode', modes, RadioModes.default)}
          value={text('value', '')}
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

const RadioItemStory = () => (
  <form className="af-form" name="myform">
    <div className="col-md-10">
      <RadioItem
        name={text('name', 'placeName')}
        id={text('id', '')}
        onChange={action('onChange')}
        value={text('value', '')}
        label={text('placeholder', 'Paris')}
        isChecked={boolean('isChecked', false)}
        readOnly={boolean('readOnly', false)}
        disabled={boolean('disabled', false)}
        classModifier={text('classModifier', '')}
        className={text('className', '')}
      />
    </div>
  </form>
);

const stories = storiesOf('Form/Input/Radio', module);

stories.addParameters({
  readme: {
    sidebar: readme,
  },
  options: {},
});

stories.add('RadioItem', RadioItemStory);
stories.add('Radio', RadioStory);
stories.add('RadioInput Default', RadioInputStory);
stories.add('RadioInput Default Required', RadioInputStoryRequired);
stories.add('RadioInput Classic', RadioClassicInputStory);
stories.add('RadioInput Inline', RadioInlineInputStory);
stories.add('Radio with children', RadioInputWithChildrenStory);
