import React, { ComponentProps } from 'react';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import Card from './Card';
import CardGroupCheckbox from './CardGroupCheckbox';
import CardContent from './CardContent';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';
import readme from '../README.md';

export default {
  title: 'Form elements/Card',
  component: Card,
  parameters: {
    readme: {
      sidebar: readme,
    },
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta;

const Template: Story<ComponentProps<typeof CardGroupCheckbox>> = ({
  children,
  disabled,
  ...args
}) => (
  <CardGroupCheckbox values={['1']} {...args}>
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

export const CardCheckboxOneStory = Template.bind({}) as typeof Template;
CardCheckboxOneStory.storyName = 'CardGroupCheckbox with one card';

export const CardCheckboxOneDisabledStory = Template.bind(
  {}
) as typeof Template;
CardCheckboxOneDisabledStory.storyName =
  'CardGroupCheckbox with one disabled card';
CardCheckboxOneDisabledStory.args = {
  disabled: true,
};

export const CardCheckboxTwoStory = Template.bind({}) as typeof Template;
CardCheckboxTwoStory.storyName = 'CardGroupCheckbox with two cards';
CardCheckboxTwoStory.args = {
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

export const CardCheckboxThreeStory = ({ disabled, ...args }) => (
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
  </CardGroupCheckbox>
);
CardCheckboxThreeStory.storyName = 'CardGroupCheckbox with three cards';
CardCheckboxThreeStory.args = {
  title: 'Franchisés standard',
};
