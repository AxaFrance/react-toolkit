import React from 'react';
import { Items } from '@axa-fr/react-toolkit-table';
import readme from '@axa-fr/react-toolkit-table/src/Items/README.md';

export default {
  title: 'Table/Items',
  component: Items,
  parameters:{
    readme: {
      sidebar: readme,
    },
    options: {},
  },
  argTypes: {
    onChange: { action: 'changed' },
    items: {
      control: {
        type: 'array',
        options: [5, 10, 25, 50, 100],
      },
    },
    numberItems: {
      control: {
        type: 'select',
        options: [5, 10, 25, 50, 100],
      },
    },
  },
}

const Template = args => <Items {...args} />;

export const Default = Template.bind({});
Default.args = {
  classModifier: '',
  className: '',
  displayLabel: 'Show',
  elementsLabel: 'elements'
};
