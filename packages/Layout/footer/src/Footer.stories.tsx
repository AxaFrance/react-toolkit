import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Footer from './Footer';
import FooterCore from './FooterCore';
import { text, boolean } from '@storybook/addon-knobs';
import readme from '../README.md';

const FooterStory = () => (
  <Footer
    icon="images/logo-axa.svg"
    copyright={text('copyright', '© 2020 AXA Tous droits réservés')}
    isIconHidden={boolean('isIconHidden', false)}
  />
);

const FooterCoreStory = () => (
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
