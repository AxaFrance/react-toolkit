import React from 'react';
import { ActionCore } from '@axa-fr/react-toolkit-action';
import Readme from '@axa-fr/react-toolkit-action/README.md';

export default {
  title: 'Action/ActionCore',
  component: ActionCore,
  parameters: {
    readme: {
      sidebar: Readme,
    },
    options: {},
  },
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

const Template = args => <ActionCore {...args} />;

export const Link = Template.bind({});
Link.args = {
  href: 'http://www.axa.fr',
  icon: 'link',
  title: 'Lien de test',
  target: '_blank',
  id: 'id',
};

export const Button = Template.bind({});
Button.args = {
  icon: 'floppy-disk',
  title: 'Enregistrer',
  classModifier: 'axa',
  id: 'id',
};
