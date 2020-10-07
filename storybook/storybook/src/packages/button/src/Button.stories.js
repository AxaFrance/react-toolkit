import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Button from '@axa-fr/react-toolkit-button';
import readme from '@axa-fr/react-toolkit-button/dist/README.md';

const LABELS = {
  listClass: ['success', 'info', 'danger', 'error'],
  defaultClass: 'success',
  title: 'Lorem ipsum',
};

const KNOBS_LABELS = {
  classModifier: 'classModifier',
  title: 'label',
};

const ButtonStory = () => (
  <Button id="id" onClick={action('onClick Action')}>
    <span className="af-btn__text">
      {text(KNOBS_LABELS.title, LABELS.title)}
    </span>
  </Button>
);

const ButtonReverseStory = () => (
  <Button
    id="id"
    classModifier={text(KNOBS_LABELS.classModifier, 'reverse')}
    onClick={action('onClick Action')}>
    <span className="af-btn__text">
      {text(KNOBS_LABELS.title, LABELS.title)}
    </span>
  </Button>
);

const ButtonSuccessStory = () => (
  <Button
    id="id"
    classModifier={text(KNOBS_LABELS.classModifier, 'success')}
    onClick={action('onClick Action')}>
    <span className="af-btn__text">
      {text(KNOBS_LABELS.title, LABELS.title)}
    </span>
  </Button>
);

const ButtonDangerStory = () => (
  <Button
    id="id"
    classModifier={text(KNOBS_LABELS.classModifier, 'danger')}
    onClick={action('onClick Action')}>
    <span className="af-btn__text">
      {text(KNOBS_LABELS.title, LABELS.title)}
    </span>
  </Button>
);

const ButtonSmallStory = () => (
  <Button
    id="id"
    classModifier={text(KNOBS_LABELS.classModifier, 'small')}
    onClick={action('onClick Action')}>
    <span className="af-btn__text">{text(KNOBS_LABELS.title, 'OK')}</span>
  </Button>
);

const ButtonDisabledStory = () => (
  <Button
    id="id"
    classModifier={text(KNOBS_LABELS.classModifier, 'disabled')}
    disabled
    onClick={action('onClick Action')}>
    <span className="af-btn__text">
      {text(KNOBS_LABELS.title, LABELS.title)}
    </span>
  </Button>
);

const ButtonWithLeftIconStory = () => (
  <Button
    id="id"
    classModifier={text(KNOBS_LABELS.classModifier, 'hasiconLeft')}
    onClick={action('onClick Action')}>
    <span className="af-btn__text">
      {text(KNOBS_LABELS.title, LABELS.title)}
    </span>
    <i className={text('glyphicon', 'glyphicon glyphicon-arrowthin-left')} />
  </Button>
);

const ButtonWithRightIconStory = () => (
  <Button
    id="id"
    classModifier={text(KNOBS_LABELS.classModifier, 'hasiconRight')}
    onClick={action('onClick Action')}>
    <span className="af-btn__text">
      {text(KNOBS_LABELS.title, LABELS.title)}
    </span>
    <i className={text('glyphicon', 'glyphicon glyphicon-arrowthin-right')} />
  </Button>
);

const ButtonCircleStory = () => (
  <Button
    id="id"
    className={text('className', 'af-btn--circle')}
    onClick={action('onClick Action')}>
    <i className={text('glyphicon', 'glyphicon glyphicon-floppy-disk')} />
  </Button>
);

const stories = storiesOf('Button', module);

stories.addParameters({
  readme: {
    sidebar: readme,
  },
  options: {},
});

stories.add('Simple button', ButtonStory);
stories.add('Button reverse', ButtonReverseStory);
stories.add('Button disabled', ButtonDisabledStory);
stories.add('Button success', ButtonSuccessStory);
stories.add('Button danger', ButtonDangerStory);
stories.add('Button small', ButtonSmallStory);
stories.add('Button circle', ButtonCircleStory);
stories.add('Button with left icon', ButtonWithLeftIconStory);
stories.add('Button with right icon', ButtonWithRightIconStory);
