import React from 'react';
import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

import 'rc-slider/assets/index.css';
import 'react-datepicker/dist/react-datepicker.css';

import '@axa-fr/react-toolkit-all/dist/style/af-toolkit-core.css';
import '@axa-fr/react-toolkit-core/dist/assets/fonts/icons/af-icons.css';
import './storybook.css';

setOptions({
  name: '@axa-fr/react-toolkit-all',
  url: 'https://www.axa.fr',
  downPanelInRight: true,
  hierarchySeparator: /\./,
  hierarchyRootSeparator: /\|/,
});

const req = require.context('../src/packages', true, /\**.stories.js$/);

function loadStories() {
  require('../src/Home/Home.stories');
  req.keys().forEach(req);
}

configure(loadStories, module);
