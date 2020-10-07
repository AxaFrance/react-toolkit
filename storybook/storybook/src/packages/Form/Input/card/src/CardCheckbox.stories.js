import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import {
  Card,
  CardGroupCheckbox,
  CardContent,
  CardHeader,
  CardFooter,
} from '@axa-fr/react-toolkit-form-input-card';
import readme from '@axa-fr/react-toolkit-form-input-card/dist/README.md';

const LABELS = {
  name: 'Form.CardGroup',
  desc: 'CardGroupCheckbox with one card',
  desc2: 'CardGroupCheckbox with one disabled card',
  desc3: 'CardGroupCheckbox with two cards',
  desc4: 'CardGroupCheckbox with three cards',
  mdFile: 'Form/Card/Card',
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

const CARDTYPE = {
  checkbox: 'checkbox',
  radio: 'radio',
};

const types = [CARDTYPE.checkbox, CARDTYPE.radio];

const CardOneStory = () => (
  <CardGroupCheckbox onChange={action('onChange')} values={['1']}>
    <Card name={text('name', 'name')} id="name" value="1">
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
  </CardGroupCheckbox>
);

const CardOneDisabledStory = () => (
  <CardGroupCheckbox onChange={action('onChange')} values={['1']}>
    <Card
      onChange={action('onChange')}
      name={text('name', 'name')}
      id="name"
      disabled={boolean('disabled', true)}>
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
  </CardGroupCheckbox>
);

const CardTwoStory = () => (
  <CardGroupCheckbox
    type={select('type', types, CARDTYPE.checkbox)}
    onChange={action('onChange')}
    values={['1']}>
    <Card name={text('name', 'name')} value="1" id="id_card1">
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
    <Card value="2" id="id_card2" name={text('name', 'money')}>
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

const CardThreeStory = () => (
  <CardGroupCheckbox
    title={text('title', 'Franchisés standard')}
    onChange={action('onChange')}
    name={text('name', 'name')}
    values={['1']}>
    <Card id="card1" value="1">
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

const stories = storiesOf('Form/Input/Checkbox Card', module);

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
stories.add(LABELS.desc2, CardOneDisabledStory);
stories.add(LABELS.desc3, CardTwoStory);
stories.add(LABELS.desc4, CardThreeStory);
