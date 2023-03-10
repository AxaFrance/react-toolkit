import React from 'react';
import { Meta, Story } from '@storybook/react';
import Items, { Props } from './Items';
import readme from './README.md';

export default {
  title: 'Agent/Components/Table/Items',
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
} as Meta;

const Template: Story<Props> = (args) => <Items {...args} />;

export const Default = Template.bind({});
Default.args = {
  classModifier: '',
  className: '',
  displayLabel: 'Show',
  elementsLabel: 'elements',
};
