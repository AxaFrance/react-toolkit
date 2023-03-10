import React, { ComponentProps } from 'react';
import { Meta, Story } from '@storybook/react';
import BooleanModal from './ModalBoolean';
import readme from '../README.md';

export default {
  title: 'Agent/Components high level/Modal/Boolean',
  component: BooleanModal,
  parameters: {
    readme: {
      sidebar: readme,
    },
    options: {},
  },
  argTypes: {
    onCancel: { action: 'onCancel' },
    onSubmit: { action: 'onSubmit' },
  },
} as Meta;

type BooleanModalProps = ComponentProps<typeof BooleanModal>;

const Template: Story<BooleanModalProps> = (args) => (
  <BooleanModal {...args}>
    <p>
      Reprehenderit sit quis aute nisi consequat consequat mollit. Commodo in
      aliquip consectetur nulla sit anim. Pariatur minim commodo enim ea eu
      laborum culpa laboris. Labore labore irure ipsum consequat enim officia
      anim ipsum aliqua excepteur qui sint. Duis sint do culpa adipisicing dolor
      adipisicing ea dolore aute nisi quis ullamco aliquip occaecat. Aute ut
      mollit amet.
    </p>
  </BooleanModal>
);

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  title: 'Titre de la modale',
};
