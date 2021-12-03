# `@axa-fr/react-toolkit-layout-footer-client`

1. [Installation](#installation)
2. [Simple](#simple)
3. [Complex](#complex)
4. [Without Bottom](#without-bottom)

## Installation

```shell script
npm i @axa-fr/react-toolkit-layout-footer-client
```

## Simple

### Import

```javascript
import {
  FooterClientList,
  FooterClientItem,
  FooterClient,
} from '@axa-fr/react-toolkit-layout-footer-client';
import '@axa-fr/react-toolkit-layout-footer-client/dist/af-footer-client.css';
```

### Use

```javascript
export const columns = [
  {
    title: 'Languages',
    links: [
      {
        text: 'Lorem',
        path: '/9',
      },
      {
        text: 'Young driver insurance',
        path: '/8',
      },
      {
        text: 'Home insurance',
        path: '/7',
      },
    ],
  },
  {
    title: 'Axa & You',
    links: [
      {
        text: 'Call us',
        path: '/6',
      },
      {
        text: 'Policy documents',
        path: '/5',
      },
      {
        text: 'Xtra by AXA',
        path: '/4',
      },
    ],
  },
  {
    title: 'Useful links',
    links: [
      {
        text: 'About us',
        path: '/3',
      },
      {
        text: 'Careers',
        path: '/2',
      },
      {
        text: 'Blog',
        path: '/1',
      },
    ],
  },
];

const simpleLayout = () => (
  <FooterClient copyright="Policy Privacy © 2021 AXA All Rights Reserved">
    {columns &&
      columns.map((column) => (
        <FooterClientList title={column.title} key={column.title}>
          {column.links.map((link) => (
            <FooterClientItem
              onClick={(e: string) => {
                console.log(e);
              }}
              path={link.path}
              key={link.path}>
              {link.text}
            </FooterClientItem>
          ))}
        </FooterClientList>
      ))}
  </FooterClient>
);
export default simpleLayout;
```

## Complex

### Import

```javascript
import {
  FooterClientList,
  FooterClientItem,
  SocialNetwork,
  FooterClient,
  LanguageSelection,
} from '@axa-fr/react-toolkit-layout-footer-client';
import '@axa-fr/react-toolkit-layout-footer-client/dist/af-footer-client.css';
```

### Use

```javascript
export const columns = [
  {
    title: 'Languages',
    links: [
      {
        text: 'Lorem',
        path: '/9',
      },
      {
        text: 'Young driver insurance',
        path: '/8',
      },
      {
        text: 'Home insurance',
        path: '/7',
      },
    ],
  },
  {
    title: 'Axa & You',
    links: [
      {
        text: 'Call us',
        path: '/6',
      },
      {
        text: 'Policy documents',
        path: '/5',
      },
      {
        text: 'Xtra by AXA',
        path: '/4',
      },
    ],
  },
  {
    title: 'Useful links',
    links: [
      {
        text: 'About us',
        path: '/3',
      },
      {
        text: 'Careers',
        path: '/2',
      },
      {
        text: 'Blog',
        path: '/1',
      },
    ],
  },
];

export const languages = [
  {
    name: 'English',
    value: 'en',
  },
  {
    name: 'Chinese',
    value: 'cn',
  },
];

export const socialNetworkList = {
  facebook: '#',
  linkedin: '#',
  youtube: '#',
  instagram: '#',
  twitter: '#',
};

export const currentLanguage = 'en';

export const bottomComponent = (
  <LanguageSelection
    onClick={(e: string) => {
      console.log(e);
    }}
    languages={languages}
    currentLanguage={currentLanguage}
  />
);

const complexLayout = () => (
  <FooterClient
    copyright="Policy Privacy © 2021 AXA All Rights Reserved"
    bottomComponent={bottomComponent}>
    {columns &&
      columns.map((column) => (
        <FooterClientList title={column.title} key={column.title}>
          {column.links.map((link) => (
            <FooterClientItem
              onClick={(e: string) => {
                console.log(e);
              }}
              path={link.path}
              key={link.path}>
              {link.text}
            </FooterClientItem>
          ))}
        </FooterClientList>
      ))}
    <FooterClientList title="Follow AXA">
      <SocialNetwork
        onClick={(e: string) => {
          console.log(e);
        }}
        list={socialNetworkList}
      />
    </FooterClientList>
  </FooterClient>
);
export default complexLayout;
```

## Without Bottom

### Import

```javascript
import {
  FooterClientList,
  FooterClientItem,
  SocialNetwork,
  FooterClient,
} from '@axa-fr/react-toolkit-layout-footer-client';
import '@axa-fr/react-toolkit-layout-footer-client/dist/af-footer-client.css';
```

### Use

```javascript
export const columns = [
  {
    title: 'Languages',
    links: [
      {
        text: 'Lorem',
        path: '/9',
      },
      {
        text: 'Young driver insurance',
        path: '/8',
      },
      {
        text: 'Home insurance',
        path: '/7',
      },
    ],
  },
  {
    title: 'Axa & You',
    links: [
      {
        text: 'Call us',
        path: '/6',
      },
      {
        text: 'Policy documents',
        path: '/5',
      },
      {
        text: 'Xtra by AXA',
        path: '/4',
      },
    ],
  },
  {
    title: 'Useful links',
    links: [
      {
        text: 'About us',
        path: '/3',
      },
      {
        text: 'Careers',
        path: '/2',
      },
      {
        text: 'Blog',
        path: '/1',
      },
    ],
  },
];

export const socialNetworkList = {
  facebook: '#',
  linkedin: '#',
  youtube: '#',
  instagram: '#',
  twitter: '#',
};

const WithoutBottom = () => (
  <FooterClient copyright="Policy Privacy © 2021 AXA All Rights Reserved">
    {columns &&
      columns.map((column) => (
        <FooterClientList title={column.title} key={column.title}>
          {column.links.map((link) => (
            <FooterClientItem
              onClick={(e: string) => {
                console.log(e);
              }}
              path={link.path}
              key={link.path}>
              {link.text}
            </FooterClientItem>
          ))}
        </FooterClientList>
      ))}

    <FooterClientList title="Follow AXA">
      <SocialNetwork
        onClick={(e: string) => {
          console.log(e);
        }}
        list={socialNetworkList}
      />
    </FooterClientList>
  </FooterClient>
);

export default WithoutBottom;
```
