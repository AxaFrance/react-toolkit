import * as React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Popover from './Popover';
import PopoverPlacements from './PopoverPlacements';
import PopoverModes from './PopoverModes';
import Readme from '../README.md';

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
type PopoverProps = React.ComponentProps<typeof Popover>;
const Template: Story<PopoverProps> = (args) => (
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
        }}
      >
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
