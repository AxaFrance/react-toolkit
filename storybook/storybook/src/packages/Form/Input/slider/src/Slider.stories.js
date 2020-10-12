import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { SliderInput, Slider } from '@axa-fr/react-toolkit-form-input-slider';
import '@axa-fr/react-toolkit-form-input-slider/dist/af-slider.css';
import {
  MessageTypes,
  InputConstants as Constants,
} from '@axa-fr/react-toolkit-form-core';

import readme from '@axa-fr/react-toolkit-form-input-slider/dist/README.md';

const options = [
  { label: '64', value: '64', id: 'uniqueId1' },
  { label: '128', value: '128', id: 'uniqueId2' },
  { label: '256', value: '256', index: 2, id: 'uniqueId3' },
  { label: '1024', value: '1024', id: 'uniqueId4' },
  { label: '2048', value: '2048', id: 'uniqueId5' },
  { label: '4096', value: '4096', id: 'uniqueId5' },
];

const SliderInputStory = () => (
  <form className="af-form" name="myform">
    <SliderInput
      options={options}
      id={text('id', 'uniqueid')}
      label={text('label', 'Place name')}
      name={text('name', 'placeName')}
      onChange={action('onChange')}
      value={number('value', '1024')}
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
      classNameContainerLabel={text(
        'classNameContainerLabel',
        Constants.defaultProps.classNameContainerLabel
      )}
      classNameContainerInput={text(
        'classNameContainerInput',
        Constants.defaultProps.classNameContainerInput
      )}
    />
  </form>
);

const SliderInputStoryRequired = () => (
  <form className="af-form" name="myform">
    <SliderInput
      options={options}
      id={text('id', 'uniqueid')}
      label={text('label', 'Place name')}
      name={text('name', 'placeName')}
      onChange={action('onChange')}
      value={number('value', '1024')}
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
      classNameContainerLabel={text(
        'classNameContainerLabel',
        Constants.defaultProps.classNameContainerLabel
      )}
      classNameContainerInput={text(
        'classNameContainerInput',
        Constants.defaultProps.classNameContainerInput
      )}
    />
  </form>
);

const SliderStory = () => (
  <form className="af-form" name="myform">
    <Slider
      name={text('name', 'placeName')}
      options={options}
      id={text('id', 'uniqueid')}
      onChange={action('onChange')}
      value={number('value', '2048')}
      placeholder={text('placeholder', 'Paris')}
      readOnly={boolean('readOnly', false)}
      disabled={boolean('disabled', false)}
      isVisible={boolean('isVisible', true)}
      classModifier={text('classModifier', '')}
      className={text('className', '')}
    />
  </form>
);

const stories = storiesOf('Form/Input/Slider', module);

stories.addParameters({
  readme: {
    sidebar: readme,
  },
  options: {},
});

stories.add('Slider', SliderStory);
stories.add('SliderInput', SliderInputStory);
stories.add('SliderInput Required', SliderInputStoryRequired);
