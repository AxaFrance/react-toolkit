import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';

import addToStorie from '@axa-fr/storybook-addons';
import {
  FileInput,
  File,
  FileTable,
} from '@axa-fr/react-toolkit-form-input-file';
import {
  MessageTypes,
  HelpMessage,
  InputConstants,
} from '@axa-fr/react-toolkit-form-core';
import readme from '@axa-fr/react-toolkit-form-input-file/dist/README.md';

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
      <div className="col-md-4">
        <File
          id={text('id', 'uniqueid')}
          name={text('name', 'placeImage')}
          accept={text('accept', 'image/jpeg, image/png, application/*')}
          onChange={action('onChange')}
          multiple={boolean('multiple', false)}
          isVisible={boolean('isVisible', true)}
          readOnly={boolean('readOnly', false)}
          disabled={boolean('disabled', false)}
          classModifier={text('classModifier', '')}
          className={text('className', '')}
          label={text('label', 'Parcourir')}
          icon={text('icon', 'open')}
        />
      </div>
    </form>
  ),
});

const errors = [
  {
    id: '000001',
    file: {
      name: 'refused-extension-file.svg',
      size: '100ko',
    },
  },
  {
    id: '000002',
    file: {
      name: 'too-big-file.jpg',
      size: '100Mo',
    },
  },
  {
    id: '000003',
    file: {
      name: 'error-file.jpg',
      size: '100Mo',
    },
  },
];

const values = [
  {
    id: '000003',
    file: {
      name: 'error-file.jpg',
      size: '100Mo',
      preview: 'https://via.placeholder.com/150Cx50',
      type: 'image',
    },
  },
  {
    id: '000004',
    file: {
      name: 'fichier.png',
      size: '100Mo',
      preview: 'https://via.placeholder.com/150Cx50',
      type: 'image',
    },
  },
  ,
  {
    id: '000005',
    file: {
      name: 'fichier.csv',
      size: '100ko',
    },
  },
];

stories.push({
  desc: 'File with values',
  component: () => (
    <form className="af-form" name="myform">
      <div className="col-md-4">
        <File
          id={text('id', 'uniqueid')}
          name={text('name', 'placeImage')}
          accept={text('accept', 'image/jpeg, image/png, application/*')}
          onChange={action('onChange')}
          multiple={boolean('multiple', false)}
          isVisible={boolean('isVisible', true)}
          readOnly={boolean('readOnly', false)}
          disabled={boolean('disabled', false)}
          classModifier={text('classModifier', '')}
          className={text('className', '')}
          label={text('label', 'Parcourir')}
          icon={text('icon', 'open')}
        />
        <HelpMessage
          message={text('helpMessage', 'Enter the place name, ex : Webcenter')}
        />
        <FileTable
          errors={[]}
          values={values}
          onClick={action('onClick')}
          classModifier={text('classModifier', '')}
        />
      </div>
    </form>
  ),
});

stories.push({
  desc: 'File with errors',
  component: () => (
    <form className="af-form" name="myform">
      <div className="col-md-4">
        <File
          id={text('id', 'uniqueid')}
          name={text('name', 'placeImage')}
          accept={text('accept', 'image/jpeg, image/png, application/*')}
          onChange={action('onChange')}
          multiple={boolean('multiple', false)}
          isVisible={boolean('isVisible', true)}
          readOnly={boolean('readOnly', false)}
          disabled={boolean('disabled', false)}
          classModifier={text('classModifier', '')}
          className={text('className', '')}
          label={text('label', 'Parcourir')}
          icon={text('icon', 'open')}
        />
        <HelpMessage
          message={text('helpMessage', 'Enter the place name, ex : Webcenter')}
        />
        <FileTable
          errors={errors}
          values={values}
          onClick={action('onClick')}
          classModifier={text('classModifier', '')}
        />
      </div>
    </form>
  ),
});

const storyData = {
  name: 'Form.Input.File',
  docs: readme,
  stories,
};

addToStorie(storyData, module);
