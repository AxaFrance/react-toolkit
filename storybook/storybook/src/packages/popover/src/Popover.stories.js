import React from 'react';
import { text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import addToStorie from '@axa-fr/storybook-addons';
import Popover, { PopoverBase, PopoverPlacements, PopoverModes } from '@axa-fr/react-toolkit-popover';

const stories = [];

const placements = [
  PopoverPlacements.bottom,
  PopoverPlacements.left,
  PopoverPlacements.right,
  PopoverPlacements.top,
];

const modes = [PopoverModes.click, PopoverModes.over];

stories.push({
  desc: 'Popover',
  component: () => (
    <div>
      <Popover
        classModifier={text('classModifier', '')}
        className={text('className', '')}
        placement={select('placement', placements, PopoverPlacements.right)}
        mode={select('mode', modes, PopoverModes.over)}>
        <Popover.Pop>
          <h1>Contenu qui va reçevoir la popover</h1>
          <p>text de la modal</p>
        </Popover.Pop>
        <Popover.Over>
          <div
            style={{
              width: '200px',
              height: '200px',
              backgroundColor: 'green',
            }}>
            Exemple
          </div>
        </Popover.Over>
      </Popover>
    </div>
  ),
});

stories.push({
  desc: 'PopoverBase',
  component: () => (
    <div>
      <PopoverBase
        classModifier={text('classModifier', '')}
        className={text('className', '')}
        isOpen={boolean('isOpen', true)}
        placement={select('placement', placements, PopoverPlacements.right)}
        onToggle={action('onToggle')}
        onOutsideTap={action('onOutsideTap')}>
        <PopoverBase.Pop>
          <h1>Contenu qui va reçevoir la popover</h1>
          <p>text de la modal</p>
        </PopoverBase.Pop>
        <PopoverBase.Over>
          Bouton d'exemple
          <button id="idbouton">Bouton d'exemple</button>
        </PopoverBase.Over>
      </PopoverBase>
    </div>
  ),
});

const storyData = {
  name: 'Popover',
  stories: stories,
};

addToStorie(storyData, module);