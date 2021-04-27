import React from 'react';
import { Meta, Story } from '@storybook/react';
import Header from './Header';
import { Name } from '../Name';
import { Infos } from '../Infos';
import readme from '../../README.md';

export default {
  title: 'Layout/Header/Header',
  component: Header,
  parameters: {
    readme: {
      sidebar: readme,
    },
    options: {},
  },
} as Meta;

export const HeaderNameStory: Story = () => (
  <Header>
    <Name
      title="Nom de l'application"
      subtitle="Baseline"
      img="images/react.svg"
      alt="Logo React"
      onClick={() => {}}
    />
  </Header>
);
HeaderNameStory.storyName = 'With Name';

export const HeaderNameInfosStory: Story = () => {
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
  return (
    <Header>
      <Name
        title="Nom de l'application"
        subtitle="Baseline"
        img="images/react.svg"
        alt="Logo React"
        onClick={() => {}}
      />
      <Infos infos={infos} />
    </Header>
  );
};
HeaderNameInfosStory.storyName = 'With Name & Infos';
