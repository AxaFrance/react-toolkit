import React from 'react';
import PopoverBase from './PopoverBase';
import PopoverPlacements from './PopoverPlacements';
import { Story } from '@storybook/react/types-6-0';
import Readme from '../README.md';
import './help-custom.scss';

export default {
  title: 'Popover/PopoverBase',
  component: PopoverBase,
  parameters: {
    readme: {
      sidebar: Readme,
    },
    options: {},
  },
  argsType: {
    onToggle: { action: 'toggled' },
    onOutsideTap: { action: 'tapped outside' },
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
  },
};

type PopoverBaseProps = React.ComponentProps<typeof PopoverBase>;
const Template: Story<PopoverBaseProps> = (args) => (
  <div>
    <PopoverBase {...args}>
      <PopoverBase.Pop>
        <div className="af-help-demo__container">
          <h3 className="af-help-demo__title">Profile</h3>
          <div className="af-help-demo__infos">
            <p className="af-help-demo__info">
              <span className="af-help-demo__info-title">Tweets</span>
              <span className="af-help-demo__info-number">1,337</span>
            </p>
            <p className="af-help-demo__info">
              <span className="af-help-demo__info-title">Following</span>
              <span className="af-help-demo__info-number">561</span>
            </p>
            <p className="af-help-demo__info">
              <span className="af-help-demo__info-title">Followers</span>
              <span className="af-help-demo__info-number">718</span>
            </p>
          </div>
        </div>
      </PopoverBase.Pop>
      <PopoverBase.Over>
        <button type="button" id="idbouton">
          Bouton d'exemple
        </button>
      </PopoverBase.Over>
    </PopoverBase>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  classModifier: 'custom',
  className: '',
  isOpen: true,
  placement: PopoverPlacements.right,
};
