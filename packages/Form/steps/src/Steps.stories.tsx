import React from 'react';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import Step from './Step';
import Steps from './Steps';
import StepBase from './StepBase';
import readme from '../README.md';

export default {
  title: 'Form elements/Steps',
  component: Steps,
  parameters: {
    readme: {
      sidebar: readme,
    },
    options: {},
  },
  argTypes: {
    onClick: { action: 'clicked' },
    mode: {
      control: {
        type: 'select',
        options: ['link', 'active', 'disabled'],
      },
    },
  },
} as Meta;

type StepsProps = {
  classModifier: string;
  className: string;
  mode: 'link' | 'active' | 'disabled';
};
const Template: Story<StepsProps> = ({ classModifier, className, mode }) => (
  <Steps classModifier={classModifier} className={className}>
    <Step
      id="id1"
      href="/etape1"
      onClick={action('onClick')}
      number="1"
      mode={mode}
      title="Previous step"
    />
    <Step
      id="id2"
      href="/etape2"
      number="2"
      onClick={action('onClick')}
      title="Previous step"
      mode="link"
    />
    <Step
      id="id3"
      number="3"
      onClick={action('onClick')}
      title="Current step"
      mode="active"
    />
    <StepBase id="idf4" title="Un titre">
      <a
        className="af-steps-list-stepLabel"
        href="#/"
        onClick={action('onClick Action')}>
        <span className="af-steps-list-stepNumber">
          <i className="glyphicon glyphicon-ok" />
        </span>
        <span className="af-steps-list-stepTitle">Custom</span>
      </a>
    </StepBase>
    <Step id="id5" number="5" title="Final step" mode="disabled" />
  </Steps>
);

export const NewStepsStory = Template.bind({}) as typeof Template;
NewStepsStory.storyName = 'New Design Steps';
NewStepsStory.args = {
  classModifier: '',
  className: 'af-steps-new',
};

export const OldStepsStory = Template.bind({}) as typeof Template;
OldStepsStory.storyName = 'Old Design Steps';
OldStepsStory.args = {
  classModifier: '',
  className: '',
};
