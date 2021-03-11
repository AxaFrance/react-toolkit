import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import ActionCore from './ActionCore';
import Readme from '../README.md';

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
} as Meta;

type ActionCoreProps = ComponentProps<typeof ActionCore>;
const Template: Story<ActionCoreProps> = (args) => <ActionCore {...args} />;

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
