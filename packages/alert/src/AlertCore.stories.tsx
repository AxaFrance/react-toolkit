import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import AlertCore from './AlertCore';
import readme from '../README.md';

const MODIFIERS = ['success', 'info', 'danger', 'error'];

const story = {
  title: 'Components low level/Alert/AlertCore',
  component: AlertCore,
  parameters: {
    readme: {
      sidebar: readme,
    },
    options: {},
  },
  args: {},
  argTypes: {
    classModifier: {
      control: { type: 'select', options: MODIFIERS },
    },
  },
};
export default story;

type AlertCoreProps = ComponentProps<typeof AlertCore>;
const Template: Story<AlertCoreProps> = (args) => <AlertCore {...args} />;

export const AlertCoreStory: Story<AlertCoreProps> = Template.bind({});
AlertCoreStory.storyName = 'Default';
AlertCoreStory.args = {
  classModifier: 'danger',
  title: 'Attention: des informations sont manquantes',
  iconClassName: 'glyphicon glyphicon-alert',
};

export const AlertCoreInfoStory: Story<AlertCoreProps> = Template.bind({});
AlertCoreInfoStory.storyName = 'Info';
AlertCoreInfoStory.args = {
  classModifier: 'info',
  title: 'Attention: des informations sont manquantes',
  iconClassName: 'glyphicon glyphicon-info-sign',
};

export const AlertCoreWithCloseStory: Story<AlertCoreProps> = Template.bind({});
AlertCoreWithCloseStory.storyName = 'With close button';
AlertCoreWithCloseStory.args = {
  classModifier: 'success',
  title: 'Succès: votre demande a bien été enregistrée.',
  iconClassName: 'glyphicon glyphicon-ok',
  onClose: action('onClose'),
};

export const AlertCoreWithDetailStory: Story<AlertCoreProps> = Template.bind(
  {}
);
AlertCoreWithDetailStory.storyName = 'Alert with details';
AlertCoreWithDetailStory.args = {
  classModifier: 'error',
  title: 'Erreur dans les champs suivants :',
  iconClassName: 'glyphicon glyphicon-minus-sign',
  children: (
    <ul>
      <li>Le nom est obligatoire</li>
      <li>Le prénom est obligatoire</li>
      <li>L'email est obligatoire</li>
      <li>Le format de date est invalide</li>
    </ul>
  ),
};
