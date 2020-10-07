import React from 'react';
import { storiesOf } from '@storybook/react';
import FormContainer from './Form.container';
import readme from './README.md';

const stories = storiesOf('Form', module);

stories.addParameters({
  readme: {
    sidebar: readme,
  },
  options: {},
});

stories.add('Statefull with hooks', () => <FormContainer />);
