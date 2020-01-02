/* eslint-disable react/no-array-index-key */
import React from 'react';
import { action } from '@storybook/addon-actions';

import addToStorie from '@axa-fr/storybook-addons';
import { Title } from '@axa-fr/react-toolkit-layout-header';
import Action from '@axa-fr/react-toolkit-action';

import readme from '@axa-fr/react-toolkit-layout-header/dist/README.md';

const stories = [];

stories.push({
  component: () => (
    <Title
      title="Toolkit Axa"
      subtitle="Info complémentaire"
      onClick={action('onToggle')}
    />
  ),
});

const actions = [
  {
    href: '#enregistrer',
    icon: 'floppy-disk',
    title: 'Enregistrer',
  },
  {
    href: '#imprimer',
    icon: 'print',
    title: 'Imprimer',
  },
];

stories.push({
  desc: 'Complex',
  component: () => (
    <Title
      title="Toolkit Axa"
      subtitle="Sous titre"
      onClick={action('onToggle')}>
      <div className="af-title-bar__actions">
        <a className="af-title-bar__link" href="#lien" title="lien titlebar">
          lien titlebar
        </a>
        {actions.map(({ icon, href, title }, index) => (
          <Action
            key={index}
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
  ),
});

const storyData = {
  name: 'Layout.Header.Title',
  docs: readme,
  stories,
};

addToStorie(storyData, module);
