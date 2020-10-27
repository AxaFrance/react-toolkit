import React from 'react';
import { Story } from '@storybook/react';
import Items, { ItemsProps } from './Items';
import readme from './README.md';

export default {
  title: 'Table/Items',
  component: Items,
  parameters: {
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
};

const Template: Story<ItemsProps> = (args) => <Items {...args} />;

export const Default = Template.bind({});
Default.args = {
  classModifier: '',
  className: '',
  displayLabel: 'Show',
  elementsLabel: 'elements',
};
