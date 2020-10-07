import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Badge from '@axa-fr/react-toolkit-badge';
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

const options = [
  { label: 'Disabled', value: '1', disabled: true, id: 'uniqueId1' },
  { label: 'Unchecked', value: '2', id: 'uniqueId2' },
  { label: 'Checked', value: '3' },
  {
    label: <Badge classModifier="success">A JSX element</Badge>,
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

const CheckboxInputStory = () => (
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
);

const CheckboxInputStoryRequired = () => (
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

const CheckboxInputDefaultStory = () => (
  <form className="af-form" name="myform">
    <CheckboxInput
      label={text('label', 'Place type')}
      name={text('name', 'placeType')}
      id={text('id', 'inputuniqueid')}
      mode={select('mode', modes, CheckboxModes.default)}
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
);

const CheckboxInputInlineStory = () => (
  <form className="af-form" name="myform">
    <CheckboxInput
      label={text('label', 'Place type')}
      name={text('name', 'placeType')}
      id={text('id', 'inputuniqueid')}
      mode={select('mode', modes, CheckboxModes.inline)}
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
);

const CheckboxItemStory = () => (
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
);

const CheckboxStory = () => (
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
          message={text('helpMessage', 'Enter the place name, ex : Webcenter')}
        />
        <FieldError />
      </div>
    </FieldForm>
  </form>
);

const CheckboxInputToggleStory = () => (
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
);

const CheckboxItemToggleStory = () => (
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
);

const stories = storiesOf('Form/Input/Checkbox', module);

stories.addParameters({
  readme: {
    sidebar: readme,
  },
  options: {},
});

stories.add('CheckboxItem', CheckboxItemStory);
stories.add('Checkbox', CheckboxStory);
stories.add('CheckboxInput Classic', CheckboxInputStory);
stories.add('CheckboxInput Required', CheckboxInputStoryRequired);
stories.add('CheckboxInput Default', CheckboxInputDefaultStory);
stories.add('CheckboxInput Inline', CheckboxInputInlineStory);
stories.add('CheckboxItem Toggle', CheckboxItemToggleStory);
stories.add('CheckboxInput Toggle', CheckboxInputToggleStory);
