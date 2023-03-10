import React, { ComponentPropsWithoutRef } from 'react';
import { Meta, Story } from '@storybook/react';
import HeaderClientApp from './HeaderClientApp';
import Readme from '../README.md';

export default {
  title: 'Client/Components/Header App',
  component: HeaderClientApp,
  parameters: {
    viewport: {
      defaultViewport: 'iphone6',
    },
    readme: {
      sidebar: Readme,
    },
    options: {},
  },
} as Meta;

type HeaderClientAppStoryProps = ComponentPropsWithoutRef<
  typeof HeaderClientApp
> & {
  title: string;
};
const Template: Story<HeaderClientAppStoryProps> = ({ children, ...args }) => (
  <HeaderClientApp {...args}>{children}</HeaderClientApp>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Sample Title',
  classModifier: '',
  className: '',
  leftChildren: <span className="material-icons">arrow_back</span>,
  rightChildren: <span className="material-icons">arrow_forward</span>,
};
