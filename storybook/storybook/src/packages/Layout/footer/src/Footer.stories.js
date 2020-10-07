import React from 'react';
import { storiesOf } from '@storybook/react';
import { Footer, FooterCore } from '@axa-fr/react-toolkit-layout-footer';
import { text, boolean } from '@storybook/addon-knobs';
import readme from '@axa-fr/react-toolkit-layout-footer/dist/README.md';

const FooterStory = () => (
  <Footer
    icon="images/logo-axa.svg"
    copyright={text('copyright')}
    isIconHidden={boolean('isIconHidden', false)}
  />
);

const FooterCoreStory = () => () => (
  <FooterCore icon="images/logo-axa.svg">
    <a href="https://www.axa.fr/">
      <strong>@ 2018 AXA</strong>
    </a>{' '}
    <i>Tous droits réservés</i>
  </FooterCore>
);

const stories = storiesOf('Layout/Footer', module);

stories.addParameters({
  readme: {
    sidebar: readme,
  },
  options: {},
});

stories.add('Default', FooterStory);
stories.add('Core with HTML children', FooterCoreStory);
