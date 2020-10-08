import React from 'react';
import Popover, {
  PopoverPlacements,
  PopoverModes,
} from '@axa-fr/react-toolkit-popover';
import Readme from '@axa-fr/react-toolkit-popover/README.md';

export default {
  title: 'Popover/Popover',
  component: Popover,
  parameters: {
    readme: {
      sidebar: Readme,
    },
    options: {},
  },
  argTypes: {
    placement: {
      control: {
        type: 'select',
        options: [
          PopoverPlacements.bottom,
          PopoverPlacements.left,
          PopoverPlacements.right,
          PopoverPlacements.top,
        ],
      },
    },
    mode: {
      control: {
        type: 'select',
        options: [PopoverModes.click, PopoverModes.over],
      },
    },
  },
};

const Template = args => (
  <Popover {...args}>
    <Popover.Pop>
      <h1>Contenu qui va reçevoir la popover</h1>
      <p>text de la modal</p>
    </Popover.Pop>
    <Popover.Over>
      <div
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: 'green',
        }}>
        Exemple
      </div>
    </Popover.Over>
  </Popover>
);

export const Default = Template.bind({});
Default.args = {
  classModifier: '',
  className: '',
  placement: PopoverPlacements.right,
  mode: PopoverModes.over,
};
