import React from 'react';
import { Meta } from '@storybook/react';
import Infos from './Infos';
import readme from '../../README.md';

export default {
  title: 'Layout/Header/Infos',
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
    definition: 'Affaire nouvelle',
  },
];

export const Default = () => <Infos infos={infos} />;
