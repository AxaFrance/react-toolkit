import React from 'react';

import addToStorie from '@axa-fr/storybook-addons';
import { Footer } from '@axa-fr/react-toolkit-layout-footer';
import { text } from '@storybook/addon-knobs';

const storyData = {
  name: 'Layout.Footer',
  stories: [
    {
      desc: 'Default',
      docs: require('./README.md'),
      component: () => (
        <Footer icon="images/logo-axa.svg" copyright={text('copyright')} />
      ),
    },
  ],
};

addToStorie(storyData, module);
