import React from 'react';
import { Paging, Modes } from '@axa-fr/react-toolkit-table';
import Readme from '@axa-fr/react-toolkit-table/src/Paging/README.md';

export default {
  title: 'Table/Paging',
  component: Paging,
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
    numberItems: {
      control: {
        type: 'select',
        options: [5, 10, 25, 50, 100],
      },
    }
  },
};

const Template = args => <Paging {...args} />;

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
  numberItems: 25,
};
