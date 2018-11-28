import React from 'react';
import { text, select } from '@storybook/addon-knobs';

import addToStorie from '@axa-fr/storybook-addons';
import Icon from '@axa-fr/react-toolkit-icon';

const readme = require('@axa-fr/react-toolkit-icon/dist/README.md');

const storyData = {
  name: 'Icon',
  stories: [
    {
      desc: 'Icon',
      docs: readme,
      component: () => (
        <Icon
          icon={select('icon', ['sante', 'banque', 'epargne'], 'sante')}
          classModifier={text('classModifier', '')}
          className={text('className', '')}
          basePath={text('basePath', '/')}
        />
      )
    }
  ]
};

addToStorie(storyData, module);
