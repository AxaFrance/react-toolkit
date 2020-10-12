import React from 'react';
import { text, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Help from '@axa-fr/react-toolkit-help';
import readme from '@axa-fr/react-toolkit-help/dist/README.md';
import './help-custom.scss';

const TextStory = () => (
  <Help mode={select('mode', ['hover', 'click'], 'click')}
        placement={select('placement', ['top', 'bottom', 'right', 'left'], 'right')}>
    Lorem ipsum dolor sit amet
  </Help>
);

const HtmlStory = () => (
  <Help
    mode={select('mode', ['hover', 'click'], 'click')}
    placement={select('placement', ['top', 'bottom', 'right', 'left'], 'right')}
    classModifier={text('classModifier', 'custom')}
    className={text('className', 'af-popover__container')}>
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
  </Help>
);

const stories = storiesOf('Help', module);

stories.addParameters({
  readme: {
    sidebar: readme,
  },
  options: {},
});

stories.add('Text', TextStory);
stories.add('Html', HtmlStory);
