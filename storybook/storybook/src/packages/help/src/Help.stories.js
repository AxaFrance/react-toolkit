import React from 'react';
import { text } from '@storybook/addon-knobs';

import addToStorie from '@axa-fr/storybook-addons';
import Help from '@axa-fr/react-toolkit-help';

const readme = require('@axa-fr/react-toolkit-help/dist/README.md');

const stories = [];

stories.push({
  desc: 'Text',
  component: () => <Help>tooltip avec du text</Help>,
});

stories.push({
  desc: 'Html',
  component: () => (
    <Help
      classModifier={text('classModifier', 'custom')}
      className={text('className', 'af-popover__container')}>
      <div className="af-help-demo__container">
        <h3 className="af-help-demo__title">Title</h3>
        <p className="af-help-demo__text">ici du text à afficher</p>
      </div>
    </Help>
  ),
});

const storyData = {
  name: 'Help',
  stories,
  docs: readme,
  readme,
};

addToStorie(storyData, module);
