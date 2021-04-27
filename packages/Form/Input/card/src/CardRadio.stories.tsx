import React, { ComponentProps, ReactNode } from 'react';
import { Meta, Story } from '@storybook/react';
import Card from './Card';
import CardGroupRadio from './CardGroupRadio';
import CardMeta from './CardMeta';
import CardContent from './CardContent';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';
import readme from '../README.md';

export default {
  title: 'Form/Input/Radio Card',
  component: CardGroupRadio,
  parameters: {
    readme: {
      sidebar: readme,
    },
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta;

type TemplateProps = Omit<ComponentProps<typeof CardGroupRadio>, 'children'> & {
  children?: ReactNode;
};
const Template: Story<TemplateProps> = ({ children, ...args }) => (
  <CardGroupRadio value="1" {...args}>
    <CardMeta>Recommandé</CardMeta>
    <Card id="name" value="1">
      <CardHeader>
        <p className="af-rccard-header__title"> Référence </p>
        <p className="af-rccard-header__subtitle">50 € / mois</p>
      </CardHeader>
      <CardContent>
        <p>John Doe</p>
        <dl>
          <dt className="af-rccard__term"> Statut: </dt>
          <dd className="af-rccard__def"> En cours </dd>
          <dt className="af-rccard__term"> Epargne atteinte: </dt>
          <dd className="af-rccard__def"> 85 000 € </dd>
        </dl>
      </CardContent>
      <CardFooter>
        <button type="submit">Valider mon action</button>
      </CardFooter>
    </Card>
    {children}
  </CardGroupRadio>
);

export const CardOneStory = Template.bind({}) as typeof Template;
CardOneStory.storyName = 'CardGroupRadio with one card';

export const CardTwoStory = Template.bind({}) as typeof Template;
CardTwoStory.storyName = 'CardGroupRadio with two radio cards';
CardTwoStory.args = {
  title: <h1>Franchisés standard</h1>,
  children: (
    <Card id="money" value="2">
      <CardHeader>
        <p className="af-rccard-header__title"> Référence </p>
        <p className="af-rccard-header__subtitle">250 € / mois</p>
      </CardHeader>
      <CardContent>
        <p>John Doe</p>
        <dl>
          <dt className="af-rccard__term"> Statut: </dt>
          <dd className="af-rccard__def"> En cours </dd>
          <dt className="af-rccard__term"> Epargne atteinte: </dt>
          <dd className="af-rccard__def"> 85 000 € </dd>
        </dl>
      </CardContent>
      <CardFooter>
        <p> Sortie en rente obligatoire </p>
      </CardFooter>
    </Card>
  ),
};
