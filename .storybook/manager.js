import addons from '@storybook/addons';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'light',
  brandTitle: '@axa-fr/react-toolkit-all',
  brandUrl: 'https://axaguildev.github.io/design-system/',
});

addons.setConfig({
  isFullscreen: false,
  panelPosition: 'bottom',
  isToolshown: true,
  showRoots: false,
  theme,
});
