import { configure, addParameters, addDecorator } from '@storybook/react';
import { create } from '@storybook/theming';
import { withKnobs } from '@storybook/addon-knobs';
import { addReadme } from 'storybook-readme';


import 'rc-slider/assets/index.css';
import 'react-datepicker/dist/react-datepicker.css';

import '@axa-fr/react-toolkit-all/dist/style/af-toolkit-core.css';
import '@axa-fr/react-toolkit-core/dist/assets/fonts/icons/af-icons.css';
import './storybook.css';

addDecorator(withKnobs);
addDecorator(addReadme);

addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: '@axa-fr/react-toolkit-all',
      brandUrl: 'https://www.axa.fr',
      // To control appearance:
      // brandImage: 'http://url.of/some.svg',
    }),
    isFullscreen: false,
    panelPosition: 'bottom',
    isToolshown: true,
    hierarchySeparator: /\./,
    hierarchyRootSeparator: /\|/,
  },
});


function loadStories() {
  require('../src/Home/Home.stories');
  const req = require.context('../src/packages', true, /\**.stories.js$/);

  req.keys().forEach(req);
}

configure(loadStories, module);
