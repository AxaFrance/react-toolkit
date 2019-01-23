/* eslint-disable jsx-a11y/href-no-hash */
import React from 'react';
import { text, selectV2 } from '@storybook/addon-knobs';
import addToStorie from '@axa-fr/storybook-addons';
import { AlertWithType } from '@axa-fr/react-toolkit-alert';
import { action } from '@storybook/addon-actions';

const readme = require('@axa-fr/react-toolkit-alert/dist/README.md');

const storyData = {
  name: 'Alert.AlertWithType',
  docs: readme,
  readme,
  stories: [
    {
      desc: 'Default',
      component: () => (
        <AlertWithType
          type={selectV2(
            'type',
            ['error', 'info', 'danger', 'success'],
            'danger'
          )}
          iconClassName={text('iconClassName', '')}
          title={text(
            'title',
            'Les caves et les garages situés dans le même corps de bâtiment que le logement assuré sont garantis d′office'
          )}
        />
      ),
    },
    {
      desc: 'With close button',
      component: () => (
        <AlertWithType
          type={selectV2(
            'type',
            ['error', 'info', 'danger', 'success'],
            'danger'
          )}
          iconClassName={text('iconClassName', '')}
          title={text(
            'title',
            'Les caves et les garages situés dans le même corps de bâtiment que le logement assuré sont garantis d′office'
          )}
          onClose={action('onClose')}
        />
      ),
    },
    {
      desc: 'With child and custom icon',
      component: () => (
        <AlertWithType
          type={selectV2(
            'type',
            ['error', 'info', 'danger', 'success'],
            'info'
          )}
          iconClassName={text('iconClassName', 'glyphicon glyphicon-print')}
          title={text('title', 'Détails')}>
          <ul>
            <li>
              L′adresse du risque ou le capital total déclaré ont été modifiés.
            </li>
            <li>
              Vous devez relancer la vérification des équipements de protection
              contre le vol.
            </li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </AlertWithType>
      ),
    },
  ],
};

addToStorie(storyData, module);
