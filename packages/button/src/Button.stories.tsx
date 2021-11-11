import React, { ComponentProps } from 'react';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react';
import Button from './Button';
import readme from '../README.md';

const MODIFIERS = [
  'success',
  'info',
  'danger',
  'error',
  'reverse',
  'disabled',
  'small',
  'hasiconLeft',
  'hasiconRight',
];

const story = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    readme: {
      sidebar: readme,
    },
    options: {},
  },
  args: {
    onClick: action('onClick'),
  },
  argTypes: {
    classModifier: {
      control: { type: 'select', options: MODIFIERS },
    },
  },
};
export default story;

type ButtonProps = ComponentProps<typeof Button>;
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const ButtonStory: Story<ButtonProps> = Template.bind({});
ButtonStory.storyName = 'Button classic';
ButtonStory.args = {
  children: <span className="af-btn__text">Button classic</span>,
};

export const ButtonReverseStory: Story<ButtonProps> = Template.bind({});
ButtonReverseStory.storyName = 'Button reverse';
ButtonReverseStory.args = {
  classModifier: 'reverse',
  children: <span className="af-btn__text">Button reverse</span>,
};

export const ButtonSuccessStory: Story<ButtonProps> = Template.bind({});
ButtonSuccessStory.storyName = 'Button success';
ButtonSuccessStory.args = {
  classModifier: 'success',
  children: <span className="af-btn__text">Button success</span>,
};

export const ButtonDangerStory: Story<ButtonProps> = Template.bind({});
ButtonDangerStory.storyName = 'Button danger';
ButtonDangerStory.args = {
  classModifier: 'danger',
  children: <span className="af-btn__text">Button danger</span>,
};

export const ButtonSmallStory: Story<ButtonProps> = Template.bind({});
ButtonSmallStory.storyName = 'Button small';
ButtonSmallStory.args = {
  classModifier: 'small',
  children: <span className="af-btn__text">OK</span>,
};

export const ButtonDisabledStory: Story<ButtonProps> = Template.bind({});
ButtonDisabledStory.storyName = 'Button disabled';
ButtonDisabledStory.args = {
  disabled: true,
  classModifier: 'disabled',
  children: <span className="af-btn__text">Button disabled</span>,
};

export const ButtonWithLeftIconStory: Story<ButtonProps> = Template.bind({});
ButtonWithLeftIconStory.storyName = 'Button with left icon';
ButtonWithLeftIconStory.args = {
  classModifier: 'hasiconLeft',
  children: (
    <>
      <span className="af-btn__text">Button with left icon</span>
      <i className="glyphicon glyphicon-arrowthin-left" />
    </>
  ),
};

export const ButtonWithRightIconStory: Story<ButtonProps> = Template.bind({});
ButtonWithRightIconStory.storyName = 'Button with right icon';
ButtonWithRightIconStory.args = {
  classModifier: 'hasiconRight',
  children: (
    <>
      <span className="af-btn__text">Button with right icon</span>
      <i className="glyphicon glyphicon-arrowthin-right" />
    </>
  ),
};

export const ButtonCircleStory: Story<ButtonProps> = Template.bind({});
ButtonCircleStory.storyName = 'Button circle';
ButtonCircleStory.args = {
  className: 'af-btn--circle',
  children: <i className="glyphicon glyphicon-floppy-disk" />,
};
