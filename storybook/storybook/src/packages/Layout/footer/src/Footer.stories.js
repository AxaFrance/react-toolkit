import React from 'react';

import addToStorie from '@axa-fr/storybook-addons';
import { Footer } from '@axa-fr/react-toolkit-layout-footer';
import { text } from '@storybook/addon-knobs';

import readme from '@axa-fr/react-toolkit-layout-footer/dist/README.md';

const storyData = {
  name: 'Layout.Footer',
  docs: readme,
  stories: [
    {
      desc: 'Default',
      component: () => (
        <Footer icon="images/logo-axa.svg" copyright={text('copyright')} />
      ),
    },
  ],
};

addToStorie(storyData, module);
