import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import addToStorie from '@axa-fr/storybook-addons';
import Button from '@axa-fr/react-toolkit-button';

const readme = require('@axa-fr/react-toolkit-button/dist/README.md');

const LABELS = {
  btn1: {
    id: 'previous',
    className: 'reverse hasiconLeft',
    text: 'Chargement des véhicules',
    icon: 'glyphicon glyphicon-arrowthin-left',
  },
  btn2: {
    id: 'next',
    className: 'auto pullRight hasiconRight',
    text: 'Récapitulatif',
    icon: 'glyphicon glyphicon-arrowthin-right',
  },
};

const KNOBS_LABELS = {
  btn1: {
    id: 'id button 1',
    className: 'classModifier button 1',
    text: 'text button 1',
    icon: 'icon button 1',
  },
  btn2: {
    id: 'id button 2',
    className: 'classModifier button 2',
    text: 'text button 2',
    icon: 'icon button 2',
  },
};

const Component = () => (
  <div>
    <Button
      id={text(KNOBS_LABELS.btn1.id, LABELS.btn1.id)}
      classModifier={text(KNOBS_LABELS.btn1.className, LABELS.btn1.className)}
      onClick={action('onClick Action')}>
      <span className="af-btn__text">
        {text(KNOBS_LABELS.btn1.text, LABELS.btn1.text)}
      </span>
      <i className={text(KNOBS_LABELS.btn1.icon, LABELS.btn1.icon)} />
    </Button>
    <Button
      id={text(KNOBS_LABELS.btn2.id, LABELS.btn2.id)}
      classModifier={text(KNOBS_LABELS.btn2.className, LABELS.btn2.className)}
      onClick={action('onClick Action')}>
      <span className="af-btn__text">
        {text(KNOBS_LABELS.btn2.text, LABELS.btn2.text)}
      </span>
      <i className={text(KNOBS_LABELS.btn2.icon, LABELS.btn2.icon)} />
    </Button>
  </div>
);

const storyData = {
  name: 'Button',
  docs: readme,
  readme,
  stories: [
    {
      desc: 'Simple button',
      component: Component,
    },
  ],
};

addToStorie(storyData, module);
