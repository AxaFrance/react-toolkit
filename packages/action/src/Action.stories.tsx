import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import Action from './Action';
import Readme from '../README.md';

type ActionProps = ComponentProps<typeof Action>;

export default {
  title: 'Components/Action',
  component: Action,
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

const Template: Story<ActionProps> = (args) => <Action {...args} />;

export const Link = Template.bind({});
Link.args = {
  href: 'http://www.axa.fr',
  icon: 'link',
  title: 'Lien de test',
  target: '_blank',
  id: 'id',
  classModifier: 'hello',
};

export const Button = Template.bind({});
Button.args = {
  id: 'id',
  icon: 'floppy-disk',
  title: 'Enregistrer',
};
