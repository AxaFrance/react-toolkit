import React from 'react';
import { Pager, Modes } from '@axa-fr/react-toolkit-table';
import Readme from '@axa-fr/react-toolkit-table/src/Pager/README.md';

export default {
  title: 'Table/Pager',
  component: Pager,
  parameters: {
    readme: {
      sidebar: Readme,
    },
    options: {},
  },
  argTypes: {
    onChange: { action: 'changed' },
    mode: {
      control: {
        type: 'select',
        options: [Modes.default, Modes.light],
      },
    },
  },
};

const Template = args => <Pager {...args} />;

export const Default = Template.bind({});
Default.args = {
  classModifier: '',
  className: '',
  mode: Modes.default,
  displayLabel: 'Show',
  elementsLabel: 'elements',
  ofLabel: 'of',
  nextLabel: 'Next »',
  previousLabel: '« Previous',
  currentPage: 5,
  numberPages: 23,
};

export const Light = Template.bind({});
Light.args = {
  classModifier: '',
  className: '',
  mode: Modes.light,
  displayLabel: 'Show',
  elementsLabel: 'elements',
  ofLabel: 'of',
  nextLabel: 'Next »',
  previousLabel: '« Previous',
  currentPage: 5,
  numberPages: 23,
};

export const ManyPages = Template.bind({});
ManyPages.args = {
  classModifier: '',
  className: '',
  mode: Modes.default,
  displayLabel: 'Show',
  elementsLabel: 'elements',
  ofLabel: 'of',
  nextLabel: 'Next »',
  previousLabel: '« Previous',
  currentPage: 4225,
  numberPages: 5000,
};
