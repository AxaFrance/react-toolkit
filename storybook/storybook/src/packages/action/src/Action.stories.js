import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Action, { ActionCore } from '@axa-fr/react-toolkit-action';
import readme from '@axa-fr/react-toolkit-action/dist/README.md';
import withPreventDefaultClick from '../../../preventClick';

const ActionLinkStory = () => (
  <Action
    href={text('href', 'http://www.axa.fr')}
    icon={text('icon', 'link')}
    title={text('title', 'Lien de test')}
    target={text('target', '_blank')}
    onClick={action('onClick Action')}
    id="id"
    classModifier={text('classModifier', 'hello')}
  />
);

const ActionCoreLinkStory = () => (
  <ActionCore
    href={text('href', 'http://www.axa.fr')}
    icon={text('icon', 'link')}
    title={text('title', 'Lien de test')}
    target={text('target', '_blank')}
    id="id"
  />
);

const ActionButtonStory = () => (
  <Action
    id="id"
    icon={text('icon', 'floppy-disk')}
    title={text('title', 'Enregistrer')}
    onClick={action('onClick Action')}
  />
);

const ActionCoreButtonStory = () => (
  <ActionCore
    id="id"
    icon={text('icon', 'floppy-disk')}
    title={text('title', 'Enregistrer')}
    onClick={withPreventDefaultClick(action('onClick Action'))}
    classModifier={text('classModifier', 'axa')}
  />
);

const stories = storiesOf('Action', module);

stories.addParameters({
  readme: {
    sidebar: readme,
  },
  options: {},
});

stories.add('Simple action link', ActionLinkStory);
stories.add('Simple actionCore link', ActionCoreLinkStory);
stories.add('Simple action button', ActionButtonStory);
stories.add('Simple actionCore button', ActionCoreButtonStory);
