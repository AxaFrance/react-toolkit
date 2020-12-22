import React from 'react';
import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react';
import Action from '@axa-fr/react-toolkit-action';
import Title from './Title';
import readme from '../../README.md';

export default {
  title: 'Layout/Header/Title',
  component: Title,
  parameters: {
    readme: {
      sidebar: readme,
    },
    options: {},
  },
} as Meta;

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

export const Default = (args) => <Title {...args} />;
Default.args = {
  title: 'Toolkit Axa',
  subtitle: 'Info complémentaire',
};
Default.argTypes = {
  toggleMenu: { action: 'onToggle' },
};

export const Complex = (args) => (
  <Title {...args}>
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
Complex.args = {
  ...Default.args,
};
Complex.argTypes = {
  ...Default.argTypes,
};
