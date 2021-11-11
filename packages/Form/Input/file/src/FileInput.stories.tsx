import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
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

const TemplateFileInput: Story<ComponentProps<typeof FileInput>> = (args) => (
  <form className="af-form" name="myform">
    <FileInput {...args} />
  </form>
);

export const FileInputStory = TemplateFileInput.bind(
  {}
) as typeof TemplateFileInput;
FileInputStory.storyName = 'FileInput';
FileInputStory.args = {
  label: 'Image',
  name: 'placeImage',
  id: 'inputuniqueid',
  accept: 'image/jpeg, image/png, application/*',
  helpMessage: 'Take a photo af a place',
  message: '',
  messageType: MessageTypes.error,
  forceDisplayMessage: false,
  multiple: true,
  isVisible: true,
  readOnly: false,
  disabled: false,
  classModifier: '',
  className: '',
  classNameContainerLabel: 'col-md-2',
  classNameContainerInput: 'col-md-10',
};

export const FileInputStoryRequired = TemplateFileInput.bind(
  {}
) as typeof TemplateFileInput;
FileInputStoryRequired.storyName = 'FileInput required';
FileInputStoryRequired.args = {
  label: 'Image',
  name: 'placeImage',
  id: 'inputuniqueid',
  accept: 'image/jpeg, image/png, application/*',
  helpMessage: 'Take a photo af a place',
  message: '',
  messageType: MessageTypes.error,
  forceDisplayMessage: false,
  multiple: true,
  isVisible: true,
  readOnly: false,
  disabled: false,
  classModifier: 'required',
  className: '',
  classNameContainerLabel: 'col-md-2',
  classNameContainerInput: 'col-md-10',
};

const TemplateFile: Story<ComponentProps<typeof File>> = (args) => (
  <form className="af-form" name="myform">
    <div className="col-md-4">
      <File {...args} />
    </div>
  </form>
);

export const FileStory = TemplateFile.bind({}) as typeof TemplateFile;
FileStory.storyName = 'File';
FileStory.args = {
  label: 'Image',
  name: 'placeImage',
  id: 'inputuniqueid',
  accept: 'image/jpeg, image/png, application/*',
  multiple: true,
  isVisible: true,
  readOnly: false,
  disabled: false,
  classModifier: '',
  className: '',
  icon: 'open',
};

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

const TemplateFileTable: Story<ComponentProps<typeof File>> = (args) => (
  <form className="af-form" name="myform">
    <div className="col-md-4">
      <File {...args} />
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

export const FileWithValuesStory = TemplateFileTable.bind(
  {}
) as typeof TemplateFileTable;
FileWithValuesStory.storyName = 'File with values';
FileWithValuesStory.args = {
  label: 'Parcourir',
  name: 'placeImage',
  id: 'inputuniqueid',
  accept: 'image/jpeg, image/png, application/*',
  multiple: false,
  isVisible: true,
  readOnly: false,
  disabled: false,
  classModifier: '',
  className: '',
  icon: 'open',
};

const TemplateFileTableErrors: Story<ComponentProps<typeof File>> = (args) => (
  <form className="af-form" name="myform">
    <div className="col-md-4">
      <File {...args} />
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

export const FileWithErrorsStory = TemplateFileTableErrors.bind(
  {}
) as typeof TemplateFileTableErrors;
FileWithErrorsStory.storyName = 'File with errors';
FileWithErrorsStory.args = {
  label: 'Parcourir',
  name: 'placeImage',
  id: 'inputuniqueid',
  accept: 'image/jpeg, image/png, application/*',
  multiple: false,
  isVisible: true,
  readOnly: false,
  disabled: false,
  classModifier: '',
  className: '',
  icon: 'open',
};
