import React from 'react';
import logo from '@axa-fr/react-toolkit-core/dist/assets/logo-axa.svg';
import { Header, Name, Infos, User } from '@axa-fr/react-toolkit-all';

import './Header.scss';

const HeaderApp = () => (
  <Header>
    <Name
      title="Ma nouvelle application"
      img={logo}
      alt="Logo React"
      onClick={() => {}}
    />
    <Infos
      infos={[
        { word: 'Client :', definition: '0123456789 - NOM' },
        { word: 'Portefeuille :', definition: '000123456789' },
        { word: 'Status :', definition: 'Affaire nouvelle' },
      ]}
    />
    <User
      name="Guillaume Chervet"
      href="#"
      profile="Agent 007"
      onClick={() => {}}
    />
  </Header>
);

export default HeaderApp;
