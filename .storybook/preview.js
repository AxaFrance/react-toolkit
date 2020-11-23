import { withKnobs } from '@storybook/addon-knobs';
import { addReadme } from 'storybook-readme';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import '../packages/all/dist/style/af-toolkit-core.scss';
import '../packages/core/dist/assets/fonts/icons/af-icons.css';
import './storybook.css';

export const decorators = [withKnobs, addReadme];

export const parameters = {
  info: {
    header: false,
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  docs: {
    inlineStories: false,
  },
  options: {},
};
