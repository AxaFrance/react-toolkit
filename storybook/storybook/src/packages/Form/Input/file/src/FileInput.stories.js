import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
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

const FileInputStory = () => (
  <form className="af-form" name="myform">
    <FileInput
      label={text('label', 'Image')}
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
);

const FileInputStoryRequired = () => (
  <form className="af-form" name="myform">
    <FileInput
      label={text('label', 'Image')}
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

const FileStory = () => (
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
);

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
  {
    id: '000005',
    file: {
      name: 'fichier.csv',
      size: '100ko',
    },
  },
];

const FileWithValuesStory = () => (
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
);

const FileWithErrorsStory = () => (
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
);

const stories = storiesOf('Form/Input/File', module);

stories.addParameters({
  readme: {
    sidebar: readme,
  },
  options: {},
});

stories.add('File', FileStory);
stories.add('File with values', FileWithValuesStory);
stories.add('File with errors', FileWithErrorsStory);
stories.add('FileInput', FileInputStory);
stories.add('FileInput Required', FileInputStoryRequired);
