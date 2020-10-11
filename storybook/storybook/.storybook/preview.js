import { addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { addReadme } from 'storybook-readme';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import '@axa-fr/react-toolkit-all/dist/style/af-toolkit-core.css';
import '@axa-fr/react-toolkit-core/dist/assets/fonts/icons/af-icons.css';

import './storybook.css';

addDecorator(withKnobs);
addDecorator(addReadme);

addParameters({
  info: {
    header: false,
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});
