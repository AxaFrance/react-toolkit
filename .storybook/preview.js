import { addReadme } from 'storybook-readme';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import '../packages/all/dist/style/af-toolkit-core.css';
import '../packages/all/dist/style/af-components-client.css';
import '../packages/core/dist/assets/fonts/icons/af-icons.css';
import '@fontsource/material-icons';
import './storybook.css';

export const decorators = [addReadme];

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  info: {
    header: false,
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  docs: {
    inlineStories: false,
  },
  options: {
    storySort: {
      order: [
        'Components high level',
        'Components',
        'Form elements',
        'Structure',
        'Pages',
        'Components low level',
      ],
    },
  },
};
