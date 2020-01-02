/* eslint-disable jsx-a11y/href-no-hash */

import React from 'react';
import { text, select } from '@storybook/addon-knobs';
import addToStorie from '@axa-fr/storybook-addons';
import Badge from '@axa-fr/react-toolkit-badge';

import readme from '@axa-fr/react-toolkit-badge/dist/README.md';

const LABELS = {
  listClass: ['success', 'info', 'danger', 'error'],
  defaultClass: 'success',
  title: 'Lorem ipsum',
};

const KNOBS_LABELS = {
  classModifier: 'classModifier',
  title: 'title',
  withChild: 'with child',
  withChildList: ['no', 'yes'],
  withChildDefault: 'no',
};

const storyData = {
  name: 'Badge',
  docs: readme,
  stories: [
    {
      desc: 'Simple badge',
      component: () => (
        <Badge
          classModifier={select(
            KNOBS_LABELS.classModifier,
            LABELS.listClass,
            LABELS.defaultClass
          )}>
          {text(KNOBS_LABELS.title, LABELS.title)}
        </Badge>
      ),
    },
  ],
};

addToStorie(storyData, module);
