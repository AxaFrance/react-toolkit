import React from 'react';
import { Meta, Story } from '@storybook/react';
import Paging, { Props } from './Paging';
import Modes from '../Pager/Modes';
import Readme from './README.md';

export default {
  title: 'Components/Paging',
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
    },
  },
} as Meta;

const Template: Story<Props> = (args) => <Paging {...args} />;

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
