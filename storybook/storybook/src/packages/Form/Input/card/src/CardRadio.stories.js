import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import {
  Card,
  CardGroupRadio,
  CardMeta,
  CardContent,
  CardHeader,
  CardFooter,
} from '@axa-fr/react-toolkit-form-input-card';

import readme from '@axa-fr/react-toolkit-form-input-card/dist/README.md';

const LABELS = {
  name: 'Form.CardGroup',
  desc: 'CardGroupRadio with one card',
  desc2: 'CardGroupRadio with one card and action button on the footer',
  desc3: 'CardGroupRadio with two radio cards',
  card1: {
    title: 'Collapsible Group Item #1',
    text:
      'Collapsible content 1 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven’t heard of them accusamus labore sustainable VHS.',
  },
  card2: {
    title: 'Collapsible Group Item #2',
    text:
      'Collapsible content 2 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven’t heard of them accusamus labore sustainable VHS.',
  },
  card3: {
    title: 'Collapsible Group Item #3',
    text:
      'Collapsible content 3 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven’t heard of them accusamus labore sustainable VHS.',
  },
};

const CardOneStory = () => (
  <CardGroupRadio onChange={action('onChange')} value="1">
    <CardMeta>Recommandé</CardMeta>
    <Card
      onChange={action('onChange')}
      name={text('name', 'name')}
      id="name"
      value="1">
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
        <p> Sortie en rente obligatoire </p>
      </CardFooter>
    </Card>
  </CardGroupRadio>
);

const CardOneWithFooterStory = () => (
  <CardGroupRadio onChange={action('onChange')} value="1">
    <Card
      onChange={action('onChange')}
      name={text('name', 'name')}
      id="name"
      value="1">
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
        <button type="submit" onClick={action('onClick Action')}>
          Valider mon action
        </button>
      </CardFooter>
    </Card>
  </CardGroupRadio>
);

const CardTwoStory = () => (
  <CardGroupRadio
    title={<h1>Franchisés standard</h1>}
    name={text('name', 'name')}
    onChange={action('onChange')}
    value="2">
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
          <dd className="af-rccard__def"> 85 000 € </dd>
        </dl>
      </CardContent>
      <CardFooter>
        <p> Sortie en rente obligatoire </p>
      </CardFooter>
    </Card>
  </CardGroupRadio>
);

const stories = storiesOf('Form/Input/Radio Card', module);

stories.addParameters({
  readme: {
    sidebar: readme,
  },
  options: {},
  viewport: {
    defaultViewport: 'pixel',
  },
});

stories.add(LABELS.desc, CardOneStory);
stories.add(LABELS.desc2, CardOneWithFooterStory);
stories.add(LABELS.desc3, CardTwoStory);
