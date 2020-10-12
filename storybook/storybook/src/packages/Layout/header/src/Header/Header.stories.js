import React from 'react';
import { storiesOf } from '@storybook/react';
import { Name, Header, Infos } from '@axa-fr/react-toolkit-layout-header';
import readme from '@axa-fr/react-toolkit-layout-header/dist/README.md';
import logo from './react.svg';

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

const HeaderNameStory = () => (
  <Header>
    <Name
      title="Nom de l'application"
      subtitle="Baseline"
      img={logo}
      alt="Logo React"
      onClick={() => {}}
    />
  </Header>
);

const HeaderNameInfosStory = () => (
  <Header>
    <Name
      title="Nom de l'application"
      subtitle="Baseline"
      img={logo}
      alt="Logo React"
      onClick={() => {}}
    />
    <Infos infos={infos} />
  </Header>
);

const stories = storiesOf('Layout/Header/Header', module);

stories.addParameters({
  readme: {
    sidebar: readme,
  },
  options: {},
});

stories.add('With Name', HeaderNameStory);
stories.add('With Name & Infos', HeaderNameInfosStory);
