import React, { ComponentProps, ReactNode } from 'react';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import Card from './Card';
import CardGroupCheckbox from './CardGroupCheckbox';
import CardContent from './CardContent';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';
import readme from '../README.md';

export default {
  title: 'Form/Input/Checkbox Card',
  component: Card,
  parameters: {
    readme: {
      sidebar: readme,
    },
    actions: { argTypesRegex: '^on.*' },
  },
  argsType: {},
} as Meta;

type TemplateProps = Omit<
  ComponentProps<typeof CardGroupCheckbox>,
  'children'
> & {
  children?: ReactNode;
};
const Template: Story<TemplateProps> = ({ children, disabled, ...args }) => (
  <CardGroupCheckbox values={['1']} {...args} onChange={action('onChange')}>
    <Card name="name" id="name" value="1" disabled={disabled}>
      <CardHeader>
        <p className="af-rccard-header__title"> Référence</p>
        <p className="af-rccard-header__subtitle">50 € / mois</p>
      </CardHeader>
      <CardContent>
        <p>John Doe</p>
        <dl>
          <dt className="af-rccard__term"> Statut: </dt>
          <dd className="af-rccard__def"> En cours </dd>
          <dt className="af-rccard__term"> Epargne atteinte: </dt>
          <dd className="af-rccard__def"> 125 000 € </dd>
        </dl>
      </CardContent>
      <CardFooter>
        <p> Sortie en rente obligatoire </p>
      </CardFooter>
    </Card>
    {children}
  </CardGroupCheckbox>
);

export const CardOneStory = Template.bind({}) as typeof Template;
CardOneStory.storyName = 'CardGroupCheckbox with one card';

export const CardOneDisabledStory = Template.bind({}) as typeof Template;
CardOneDisabledStory.storyName = 'CardGroupCheckbox with one disabled card';
CardOneDisabledStory.args = {
  disabled: true,
};

export const CardTwoStory = Template.bind({}) as typeof Template;
CardTwoStory.storyName = 'CardGroupCheckbox with two cards';
CardTwoStory.args = {
  children: (
    <Card value="2" id="id_card2" name="money">
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

export const CardThreeStory = Template.bind({}) as typeof Template;
CardThreeStory.storyName = 'CardGroupCheckbox with three cards';
CardThreeStory.args = {
  children: (
    <>
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
            <dd className="af-rccard__def"> 75 000 € </dd>
          </dl>
        </CardContent>
        <CardFooter>
          <p> Sortie en rente obligatoire </p>
        </CardFooter>
      </Card>
      <Card value="3" id="rente">
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
    </>
  ),
};
