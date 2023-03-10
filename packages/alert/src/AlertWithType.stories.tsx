import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import AlertWithType from './AlertWithType';
import readme from '../README.md';

const MODIFIERS = ['success', 'info', 'danger', 'error'];

const story = {
  title: 'Agent/Components low level/Alert/AlertWithType',
  component: AlertWithType,
  parameters: {
    readme: {
      sidebar: readme,
    },
    options: {},
  },
  args: {},
  argTypes: {
    type: {
      control: { type: 'select', options: MODIFIERS },
    },
  },
};
export default story;

type AlertWithTypeProps = ComponentProps<typeof AlertWithType>;
const Template: Story<AlertWithTypeProps> = (args) => (
  <AlertWithType {...args} />
);

export const AlertWithTypeStory: Story<AlertWithTypeProps> = Template.bind({});
AlertWithTypeStory.storyName = 'Default';
AlertWithTypeStory.args = {
  type: 'danger',
  title: 'Attention: des informations sont manquantes',
};

export const AlertWithTypeInfoStory: Story<AlertWithTypeProps> = Template.bind(
  {}
);
AlertWithTypeInfoStory.storyName = 'Alert Info';
AlertWithTypeInfoStory.args = {
  type: 'info',
  title: 'Info: vous pouvez également contacter un conseiller par téléphone',
};

export const AlertWithTypeWithCloseStory: Story<AlertWithTypeProps> =
  Template.bind({});
AlertWithTypeWithCloseStory.storyName = 'Alert with close';
AlertWithTypeWithCloseStory.args = {
  type: 'success',
  title: 'Succès: votre demande a bien été enregistrée.',
  onClose: action('onClose'),
};

export const AlertWithTypeWithDetailStory: Story<AlertWithTypeProps> =
  Template.bind({});
AlertWithTypeWithDetailStory.storyName = 'Alert with details';
AlertWithTypeWithDetailStory.args = {
  type: 'error',
  title: 'Erreur dans les champs suivants :',
  children: (
    <ul>
      <li>Le nom est obligatoire</li>
      <li>Le prénom est obligatoire</li>
      <li>L'email est obligatoire</li>
      <li>Le format de date est invalide</li>
    </ul>
  ),
};
