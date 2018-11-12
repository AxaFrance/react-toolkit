/* eslint-disable react/no-danger, jsx-a11y/href-no-hash  */
import React from 'react';
import addToStorie from '@axa-fr/storybook-addons';
import FormContainer from './Form.container';

const storyData = {
  name: 'Form.Demo Statefull',
  stories: [
    {
      desc: 'Form with recompose',
      withInfo: false,
      readme: require('./README.md'),
      component: () => <FormContainer />,
    },
  ],
};

addToStorie(storyData, module);
