import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/moment/locale/fr';

import '@axa-fr/react-toolkit-all/dist/style/bootstrap/grid.css';
import '@axa-fr/react-toolkit-all/dist/style/bootstrap/reboot.css';
import '@axa-fr/react-toolkit-core/dist/assets/fonts/icons/af-icons.css';

import App from './layout/App';

ReactDOM.render(<App />, document.getElementById('root'));
