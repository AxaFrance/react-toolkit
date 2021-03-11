import React, { ComponentProps } from 'react';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import FooterClient from './FooterClient';
import FooterClientItem from './FooterClientItem';
import FooterClientList from './FooterClientList';
import SocialNetwork from './SocialNetwork';
import LanguageSelection from './LanguageSelection';
import readme from '../README.md';

export default {
  title: 'Layout/FooterClient',
  component: FooterClient,
  parameters: {
    readme: {
      sidebar: readme,
    },
    options: {},
  },
} as Meta;

const columns = [
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

const languages = [
  {
    name: 'English',
    value: 'en',
  },
  {
    name: 'Chinese',
    value: 'cn',
  },
];

const currentLanguage = 'en';

const socialNetworkList = {
  facebook: '#',
  linkedin: '#',
  youtube: '#',
  instagram: '#',
  twitter: '#',
};

const List = () => (
  <>
    {columns.map((column) => (
      <FooterClientList title={column.title} key={column.title}>
        {column.links.map((link) => (
          <FooterClientItem path={link.path} key={link.path}>
            {link.text}
          </FooterClientItem>
        ))}
      </FooterClientList>
    ))}
  </>
);

type FooterClientProps = ComponentProps<typeof FooterClient>;
const Template: Story<FooterClientProps> = ({ children, ...args }) => (
  <FooterClient {...args}>{children}</FooterClient>
);
export const ComplexStory: Story<FooterClientProps> = Template.bind({});
ComplexStory.storyName = 'Complex';
ComplexStory.args = {
  copyright: 'Policy Privacy © 2016 AXA All Rights Reserved',
  bottomComponent: (
    <LanguageSelection
      onClick={action('onLanguageSelection')}
      languages={languages}
      currentLanguage={currentLanguage}
    />
  ),
  children: (
    <>
      <List />
      <FooterClientList title="Follow AXA">
        <SocialNetwork list={socialNetworkList} />
      </FooterClientList>
    </>
  ),
};

export const SimpleStory: Story<FooterClientProps> = Template.bind({});
SimpleStory.storyName = 'Simple';
SimpleStory.args = {
  children: <List />,
};

export const Withoutbottom: Story<FooterClientProps> = Template.bind({});
Withoutbottom.storyName = 'Without bottom';
Withoutbottom.args = {
  children: ComplexStory.args.children,
};
