import React from 'react';
import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { MessageTypes, HelpMessage } from '@axa-fr/react-toolkit-form-core';
import FileInput from './FileInput';
import File from './File';
import FileTable from './FileTable';
import readme from '../README.md';

export default {
  title: 'Form elements/File',
  component: FileInput,
  parameters: {
    readme: {
      sidebar: readme,
    },
    actions: { argTypesRegex: '^on.*' },
  },
  argTypes: {
    messageType: {
      control: { type: 'select', options: Object.values(MessageTypes) },
    },
  },
} as Meta;

export const FileInputStory = (args) => (
  <form className="af-form" name="myform">
    <FileInput
      {...args}
      label="Image"
      name="placeImage"
      id="inputuniqueid"
      accept="image/jpeg, image/png, application/*"
      helpMessage="Take a photo af a place"
      messageType={MessageTypes.error}
      multiple
      isVisible
      classNameContainerLabel="col-md-2"
      classNameContainerInput="col-md-10"
    />
  </form>
);
FileInputStory.storyName = 'FileInput';

export const FileInputStoryRequired = (args) => <FileInputStory {...args} />;
FileInputStoryRequired.storyName = 'FileInput required';
FileInputStoryRequired.args = {
  classModifier: 'required',
};

export const FileStory = (args) => (
  <form className="af-form" name="myform">
    <div className="col-md-4">
      <File
        {...args}
        label="Image"
        name="placeImage"
        id="inputuniqueid"
        accept="image/jpeg, image/png, application/*"
        multiple
        isVisible
        icon="open"
      />
    </div>
  </form>
);
FileStory.storyName = 'File';

const errors = [
  {
    file: {
      name: 'refused-extension-file.svg',
      preview: '',
      size: 100,
    },
  },
  {
    file: {
      name: 'too-big-file.jpg',
      preview: '',
      size: 100,
    },
  },
  {
    file: {
      name: 'error-file.jpg',
      preview: '',
      size: 100,
    },
  },
];

const values = [
  {
    id: '000003',
    file: {
      name: 'error-file.jpg',
      size: 100,
      preview: 'https://via.placeholder.com/150Cx50',
      type: 'image',
    },
  },
  {
    id: '000004',
    file: {
      name: 'fichier.png',
      size: 100,
      preview: 'https://via.placeholder.com/150Cx50',
      type: 'image',
    },
  },
  {
    id: '000005',
    file: {
      name: 'fichier.csv',
      preview: 'https://via.placeholder.com/150Cx50',
      size: 100,
    },
  },
];

export const FileWithValuesStory = (args) => (
  <form className="af-form" name="myform">
    <div className="col-md-4">
      <File
        {...args}
        label="Parcourir"
        name="placeImage"
        id="inputuniqueid"
        accept="image/jpeg, image/png, application/*"
        isVisible
        icon="open"
      />
      <HelpMessage message="Enter the place name, ex : Webcenter" />
      <FileTable
        errors={[]}
        values={values}
        onClick={action('onClick')}
        classModifier=""
      />
    </div>
  </form>
);
FileWithValuesStory.storyName = 'File with values';

export const FileWithErrorsStory = (args) => (
  <form className="af-form" name="myform">
    <div className="col-md-4">
      <File
        {...args}
        label="Parcourir"
        name="placeImage"
        id="inputuniqueid"
        accept="image/jpeg, image/png, application/*"
        isVisible
        icon="open"
      />
      <HelpMessage message="Enter the place name, ex : Webcenter" />
      <FileTable
        errors={errors}
        values={values}
        onClick={action('onClick')}
        classModifier=""
      />
    </div>
  </form>
);
FileWithErrorsStory.storyName = 'File with errors';
