import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import Name from './Name';
import readme from '../../README.md';

export default {
  title: 'Layout/Header/Name',
  component: Name,
  parameters: {
    readme: {
      sidebar: readme,
    },
    options: {},
  },
} as Meta;

export const Default: Story<ComponentProps<typeof Name>> = (args) => (
  <Name {...args} />
);
Default.args = {
  title: "Nom de l'application",
  subtitle: 'Baseline',
  img: 'images/react.svg',
  alt: 'Logo React',
};
Default.argTypes = {
  onClick: { action: 'onClick' },
};
