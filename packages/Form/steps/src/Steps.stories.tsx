import React from 'react';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import Step from './Step';
import Steps from './Steps';
import StepBase from './StepBase';
import readme from '../README.md';

export default {
  title: 'Form/Steps',
  component: Steps,
  parameters: {
    readme: {
      sidebar: readme,
    },
    options: {},
  },
} as Meta;

type OldStepsProps = {
  classModifier: string;
  className: string;
  mode: 'link' | 'active' | 'disabled';
};
export const OldStepsStory: Story<OldStepsProps> = ({
  classModifier,
  className,
  mode,
}) => (
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
OldStepsStory.storyName = 'Old Design Steps';
OldStepsStory.args = {
  classModifier: '',
  className: '',
};
OldStepsStory.argTypes = {
  onClick: { action: 'clicked' },
  mode: {
    control: {
      type: 'select',
      options: ['link', 'active', 'disabled'],
    },
  },
};

export const NewStepsStory = () => (
  <Steps
    classModifier={text('classModifier', '')}
    className={text('className', 'af-steps-new')}>
    <Step
      id="id1"
      href="/etape1"
      onClick={action('onClick')}
      mode={select('modes', StepModes, StepModes.link)}
      title="Previous step"
    />
    <Step
      id="id2"
      href="/etape2"
      onClick={action('onClick')}
      title="Previous step"
      modes={StepModes.link}
    />
    <Step
      id="id3"
      number="13"
      onClick={action('onClick')}
      title="Current step"
      mode={StepModes.active}
    />
    <StepBase id="idf4" title="Un titre">
      <a
        className="af-steps-list-stepLabel"
        href="#/"
        onClick={withPreventDefaultClick(action('onClick Action'))}>
        <span className="af-steps-list-stepNumber">
          <i className="glyphicon glyphicon-ok" />
        </span>
        <span className="af-steps-list-stepTitle">Custom</span>
      </a>
    </StepBase>
    <Step id="id5" title="Final step" mode={StepModes.disabled} />
  </Steps>
);
