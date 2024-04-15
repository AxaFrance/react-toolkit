import React from 'react';
import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react';
import Action from '@axa-fr/react-toolkit-action';
import HeaderTitle from './HeaderTitle';
import readme from '../../README.md';

export default {
  title: 'Structure/Header/HeaderTitle',
  component: HeaderTitle,
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

export const Default = (args) => <HeaderTitle {...args} />;
Default.args = {
  title: 'Toolkit Axa',
  subtitle: 'Info complémentaire',
  isSticky: true,
};
Default.argTypes = {
  toggleMenu: { action: 'onToggle' },
};

export const Complex = (args) => (
  <HeaderTitle {...args}>
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
  </HeaderTitle>
);
Complex.args = {
  ...Default.args,
};
Complex.argTypes = {
  ...Default.argTypes,
};
