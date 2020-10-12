import React from 'react';
import Title from '@axa-fr/react-toolkit-title';
import Readme from '@axa-fr/react-toolkit-title/README.md';

export default {
  title: 'Title',
  component: Title,
  parameters: {
    readme: {
      sidebar: Readme,
    },
    options: {},
  }
};

const Template = ({ title, args }) => <Title {...args}>{title}</Title>;

export const Default = Template.bind({});
Default.args= {
  title: 'Sample Title',
  classModifier: '',
  className: '',
}
