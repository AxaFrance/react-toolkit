import React from 'react';
import { text, select } from '@storybook/addon-knobs';

import addToStorie from '@axa-fr/storybook-addons';
import Icon from '@axa-fr/react-toolkit-icon';

import readme from '@axa-fr/react-toolkit-icon/dist/README.md';

const storyData = {
  name: 'Icon',
  docs: readme,
  stories: [
    {
      desc: 'Icon',
      component: () => (
        <Icon
          icon={select('icon', ['sante', 'banque', 'epargne'], 'sante')}
          classModifier={text('classModifier', '')}
          className={text('className', '')}
          basePath={text('basePath', '/')}
        />
      ),
    },
  ],
};

addToStorie(storyData, module);
