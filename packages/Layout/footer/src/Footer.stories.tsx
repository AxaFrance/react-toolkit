import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import logo from '@axa-fr/react-toolkit-core/dist/assets/logo-axa.svg';
import Footer from './Footer';
import FooterCore from './FooterCore';
import readme from '../README.md';
import './footer.scss';

export default {
  title: 'Agent/Structure/Footer',
  component: Footer,
  parameters: {
    readme: {
      sidebar: readme,
    },
    options: {},
  },
} as Meta;

export const FooterStory: Story<ComponentProps<typeof Footer>> = (args) => (
  <Footer {...args} />
);
FooterStory.storyName = 'Default';
FooterStory.args = {
  copyright: '© 2020 AXA Tous droits réservés',
};

export const FooterCoreStory: Story = () => (
  <FooterCore icon={logo}>
    <a href="https://www.axa.fr/">
      <strong>@ 2018 AXA</strong>
    </a>
    <i>Tous droits réservés</i>
  </FooterCore>
);
FooterCoreStory.storyName = 'Core with HTML children';
