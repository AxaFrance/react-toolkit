import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
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

const options = [
  { value: 'fun', label: 'For fun' },
  { value: 'work', label: 'For work' },
  { value: 'drink', label: 'For drink' },
];

const SelectInputStory = () => (
  <form className="af-form" name="myform">
    <SelectInput
      label={text('label', 'Place type')}
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
);

const SelectInputStoryRequired = () => (
  <form className="af-form" name="myform">
    <SelectInput
      label={text('label', 'Place type')}
      name={text('name', 'placeName')}
      id={text('id', 'muid')}
      helpMessage={text('helpMessage', 'Enter the place type')}
      onChange={action('onChange')}
      options={options}
      value={text('value', '')}
      readOnly={boolean('readOnly', false)}
      disabled={boolean('disabled', false)}
      isVisible={boolean('isVisible', true)}
      classModifier={text('classModifier', 'required')}
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
);

const SelectStory = () => (
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
            forceDisplayPlaceholder={boolean('forceDisplayPlaceholder', false)}
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
);

const SelectKeepPlaceholderStory = () => (
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
            forceDisplayPlaceholder={boolean('forceDisplayPlaceholder', true)}
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
);

const SelectBaseStory = () => (
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
      />
    </div>
  </form>
);

const stories = storiesOf('Form/Input/Select', module);

stories.addParameters({
  readme: {
    sidebar: readme,
  },
  options: {},
});

stories.add('SelectBase', SelectBaseStory);
stories.add('Select', SelectStory);
stories.add('Select keep placeholder', SelectKeepPlaceholderStory);
stories.add('SelectInput', SelectInputStory);
stories.add('SelectInput Required', SelectInputStoryRequired);
