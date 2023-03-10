import React, { ComponentPropsWithoutRef } from 'react';
import { Meta, Story } from '@storybook/react';
import Infos from './Infos';
import readme from '../../README.md';

export default {
  title: 'Agent/Structure/Header/Infos',
  component: Infos,
  parameters: {
    readme: {
      sidebar: readme,
    },
    options: {},
  },
} as Meta;

const infos = [
  {
    word: 'Client :',
    definition: '0123456789 - NOM',
  },
  {
    word: 'Portefeuille :',
    definition: '000123456789',
  },
  {
    word: 'Status :',
    definition: (
      <span style={{ textDecoration: 'underline' }}>Affaire nouvelle</span>
    ),
  },
];

const Template: Story<ComponentPropsWithoutRef<typeof Infos>> = (args) => (
  <Infos {...args} />
);

export const InfosStory: Story<ComponentPropsWithoutRef<typeof Infos>> =
  Template.bind({});
InfosStory.storyName = 'Default';
InfosStory.args = {
  classModifier: '',
  className: '',
  infos,
};
