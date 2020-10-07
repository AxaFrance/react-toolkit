import React from 'react';
import { text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import Popover, {
  PopoverBase,
  PopoverPlacements,
  PopoverModes,
} from '@axa-fr/react-toolkit-popover';
import readme from '@axa-fr/react-toolkit-popover/dist/README.md';
import './help-custom.scss';

const placements = [
  PopoverPlacements.bottom,
  PopoverPlacements.left,
  PopoverPlacements.right,
  PopoverPlacements.top,
];

const modes = [PopoverModes.click, PopoverModes.over];

const PopoverStory = () => (
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
);

const PopoverBaseStory = () => (
  <div>
    <PopoverBase
      classModifier={text('classModifier', 'custom')}
      className={text('className', '')}
      isOpen={boolean('isOpen', true)}
      placement={select('placement', placements, PopoverPlacements.right)}
      onToggle={action('onToggle')}
      onOutsideTap={action('onOutsideTap')}>
      <PopoverBase.Pop>
        <div className="af-help-demo__container">
          <h3 className="af-help-demo__title">Profile</h3>
          <div className="af-help-demo__infos">
            <p className="af-help-demo__info">
              <span className="af-help-demo__info-title">Tweets</span>
              <span className="af-help-demo__info-number">1,337</span>
            </p>
            <p className="af-help-demo__info">
              <span className="af-help-demo__info-title">Following</span>
              <span className="af-help-demo__info-number">561</span>
            </p>
            <p className="af-help-demo__info">
              <span className="af-help-demo__info-title">Followers</span>
              <span className="af-help-demo__info-number">718</span>
            </p>
          </div>
        </div>
      </PopoverBase.Pop>
      <PopoverBase.Over>
        <button type="button" id="idbouton">
          Bouton d'exemple
        </button>
      </PopoverBase.Over>
    </PopoverBase>
  </div>
);

const stories = storiesOf('Popover', module);

stories.addParameters({
  readme: {
    sidebar: readme,
  },
  options: {},
});

stories.add('Popover', PopoverStory);
stories.add('PopoverBase', PopoverBaseStory);
