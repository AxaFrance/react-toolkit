/* eslint-disable jsx-a11y/href-no-hash */

import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import addToStorie from '@axa-fr/storybook-addons';
import Action, { ActionCore } from '@axa-fr/react-toolkit-action';

import readme from '@axa-fr/react-toolkit-action/dist/README.md';

const withPreventDefaultClick = next => e => {
  e.preventDefault();
  next(e);
};

const storyData = {
  name: 'Action',
  docs: readme,
  stories: [
    {
      desc: 'Simple action link',
      component: () => (
        <Action
          href={text('href', 'http://www.axa.fr')}
          icon={text('icon', 'link')}
          title={text('title', 'Lien de test')}
          target={text('target', '_blank')}
          onClick={action('onClick Action')}
          id="id"
          classModifier={text('classModifier', 'hello')}
        />
      ),
    },
    {
      desc: 'Simple action button',
      component: () => (
        <Action
          id="id"
          icon={text('icon', 'floppy-disk')}
          title={text('title', 'Enregistrer')}
          onClick={action('onClick Action')}
        />
      ),
    },
    {
      desc: 'Simple actionCore link',
      component: () => (
        <ActionCore
          href={text('href', 'http://www.axa.fr')}
          icon={text('icon', 'link')}
          title={text('title', 'Lien de test')}
          target={text('target', '_blank')}
          id="id"
        />
      ),
    },
    {
      desc: 'Simple actionCore button',
      component: () => (
        <ActionCore
          id="id"
          icon={text('icon', 'floppy-disk')}
          title={text('title', 'Enregistrer')}
          onClick={withPreventDefaultClick(action('onClick Action'))}
          classModifier={text('classModifier', 'axa')}
        />
      ),
    },
  ],
};

addToStorie(storyData, module);
