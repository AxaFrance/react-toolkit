## header

### Get started

```sh
  npm i "@axa-fr/react-toolkit-layout-header"
```

### Components

#### Header example :

```javascript
import React from 'react';
import { Header, Infos, User, Name, Title } from '@axa-fr/react-toolkit-layout-footer';
const MyHeader => (
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
      href="/profile"
      profile="Agent 007"
      onClick={() => {}}
    />
  </Header>
);
```
