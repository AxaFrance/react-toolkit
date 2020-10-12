import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { Title } from '@axa-fr/react-toolkit-layout-header';
import Action from '@axa-fr/react-toolkit-action';
import readme from '@axa-fr/react-toolkit-layout-header/dist/README.md';

const actions = [
  {
    id: '001',
    href: '#enregistrer',
    icon: 'floppy-disk',
    title: 'Enregistrer',
  },
  {
    id: '002',
    href: '#imprimer',
    icon: 'print',
    title: 'Imprimer',
  },
];

const TitleStory = () => (
  <Title
    title="Toolkit Axa"
    subtitle="Info complémentaire"
    toggleMenu={action('onToggle')}
  />
);

const TitleComplexStory = () => (
  <Title title="Toolkit Axa" subtitle="Sous titre" toggleMenu={action('onToggle')}>
    <div className="af-title-bar__actions">
      <a className="af-title-bar__link" href="#lien" title="lien titlebar">
        lien titlebar
      </a>
      {actions.map(({ icon, href, title, id }) => (
        <Action
          key={id}
          icon={icon}
          href={href}
          title={title}
          onClick={() => {
            action('Action click');
          }}
        />
      ))}
    </div>
  </Title>
);

const stories = storiesOf('Layout/Header/Title', module);

stories.addParameters({
  readme: {
    sidebar: readme,
  },
  options: {},
});

stories.add('Default', TitleStory);
stories.add('Complex', TitleComplexStory);
