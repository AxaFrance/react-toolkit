import React from 'react';

import addToStorie from '@axa-fr/storybook-addons';
import { FooterCore } from '@axa-fr/react-toolkit-layout-footer';

const readme = require('@axa-fr/react-toolkit-layout-footer/dist/README.md');

const storyData = {
  name: 'Layout.Footer',
  docs: readme,
  readme,
  stories: [
    {
      desc: 'Core with HTML children',
      component: () => (
        <FooterCore icon="images/logo-axa.svg">
          <a href="https://www.axa.fr/">
            <strong>@ 2018 AXA</strong>
          </a>{' '}
          <i>Tous droits réservés</i>
        </FooterCore>
      ),
    },
  ],
};

addToStorie(storyData, module);
