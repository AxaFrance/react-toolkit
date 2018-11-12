import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';

import addToStorie from '@axa-fr/storybook-addons';
import { FileInput, File } from '@axa-fr/react-toolkit-form-input-file';
import { MessageTypes, InputConstants } from '@axa-fr/react-toolkit-form-core';

const stories = [];

stories.push({
  desc: 'FileInput',
  component: () => (
    <form className="af-form" name="myform">
      <FileInput
        label={text('label', 'Image *')}
        name={text('name', 'placeImage')}
        id={text('id', 'uniqueid')}
        accept={text('accept', 'image/jpeg, image/png, application/*')}
        onChange={action('onChange')}
        helpMessage={text('helpMessage', 'Take a photo af a place')}
        message={text('message', '')}
        messageType={select('messageType', MessageTypes, MessageTypes.error)}
        forceDisplayMessage={boolean('forceDisplayMessage', false)}
        multiple={boolean('multiple', true)}
        isVisible={boolean('isVisible', true)}
        readOnly={boolean('readOnly', false)}
        disabled={boolean('disabled', false)}
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
  desc: 'File',
  component: () => (
    <form className="af-form" name="myform">
      <File
        id={text('id', 'uniqueid')}
        name={text('name', 'placeImage')}
        accept={text('accept', 'image/jpeg, image/png, application/*')}
        onChange={action('onChange')}
        multiple={boolean('multiple', true)}
        isVisible={boolean('isVisible', true)}
        readOnly={boolean('readOnly', false)}
        disabled={boolean('disabled', false)}
        classModifier={text('classModifier', '')}
        className={text('className', '')}
        label={text('label', 'Parcourir')}
        icon={text('icon', 'file')}
      />
    </form>
  ),
});

const storyData = {
  name: 'Form.Input.File',
  stories,
};

addToStorie(storyData, module);
