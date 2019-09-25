import { addParameters, configure } from '@storybook/react';

configure(require.context('../src', true, /\.stories\.js$/), module);

import '@axa-fr/react-toolkit-all/dist/style/bootstrap/grid.css';
import '@axa-fr/react-toolkit-all/dist/style/bootstrap/reboot.css';
import '@axa-fr/react-toolkit-core/dist/assets/fonts/icons/af-icons.css';

import '../src/layout/App/App.scss';


addParameters({
  options: {
    showPanel: true,
    showNav: true,
  },
});
