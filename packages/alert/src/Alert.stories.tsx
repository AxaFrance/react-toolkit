import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Alert from './Alert';
import readme from '../README.md';

const MODIFIERS = ['success', 'info', 'danger', 'error'];

const story = {
  title: 'Components/Alert',
  component: Alert,
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

type AlertProps = ComponentProps<typeof Alert>;
const Template: Story<AlertProps> = (args) => <Alert {...args} />;

export const AlertStory: Story<AlertProps> = Template.bind({});
AlertStory.storyName = 'Default';
AlertStory.args = {
  classModifier: 'danger',
  title: 'Attention: des informations sont manquantes',
  onClose: null,
};

export const AlertInfoStory: Story<AlertProps> = Template.bind({});
AlertInfoStory.storyName = 'Alert Info';
AlertInfoStory.args = {
  classModifier: 'info',
  title: 'Info: vous pouvez également contacter un conseiller par téléphone',
  onClose: null,
};

export const AlertWithCloseStory: Story<AlertProps> = Template.bind({});
AlertWithCloseStory.storyName = 'Alert with close';
AlertWithCloseStory.args = {
  classModifier: 'success',
  title: 'Succès: votre demande a bien été enregistrée.',
  onClose: action('onClose'),
};

export const AlertWithDetailStory: Story<AlertProps> = Template.bind({});
AlertWithDetailStory.storyName = 'Alert with details';
AlertWithDetailStory.args = {
  classModifier: 'error',
  title: 'Erreur dans les champs suivants :',
  icon: 'minus-sign',
  children: (
    <ul>
      <li>Le nom est obligatoire</li>
      <li>Le prénom est obligatoire</li>
      <li>L'email est obligatoire</li>
      <li>Le format de date est invalide</li>
    </ul>
  ),
  onClose: null,
};
