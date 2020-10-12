import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import {
  Steps,
  Step,
  StepBase,
  StepModes,
} from '@axa-fr/react-toolkit-form-steps';
import readme from '@axa-fr/react-toolkit-form-steps/dist/README.md';
import withPreventDefaultClick from '../../../../preventClick';

const OldStepsStory = () => (
  <Steps
    classModifier={text('classModifier', '')}
    className={text('className', '')}>
    <Step
      id="id1"
      href="/etape1"
      onClick={action('onClick')}
      number="1"
      mode={select('modes', StepModes, StepModes.link)}
      title="Previous step"
    />
    <Step
      id="id2"
      href="/etape2"
      number="2"
      onClick={action('onClick')}
      title="Previous step"
      modes={StepModes.link}
    />
    <Step
      id="id3"
      number="3"
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
    <Step id="id5" number="5" title="Final step" mode={StepModes.disabled} />
  </Steps>
);

const NewStepsStory = () => (
  <Steps
    classModifier={text('classModifier', '')}
    className={text('className', 'af-steps-new')}>
    <Step
      id="id1"
      href="/etape1"
      onClick={action('onClick')}
      number="1"
      mode={select('modes', StepModes, StepModes.link)}
      title="Previous step"
      icon="glyphicon-arrow-rounded-right"
    />
    <Step
      id="id2"
      href="/etape2"
      number="2"
      onClick={action('onClick')}
      title="Previous step"
      modes={StepModes.link}
      icon="glyphicon-arrow-rounded-right"
    />
    <Step
      id="id3"
      number="3"
      onClick={action('onClick')}
      title="Current step"
      mode={StepModes.active}
      icon="glyphicon-arrow-rounded-right"
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
        <i className="icons-list__item-icon glyphicon glyphicon-arrow-rounded-right" />
      </a>
    </StepBase>
    <Step id="id5" number="5" title="Final step" mode={StepModes.disabled} />
  </Steps>
);

const stories = storiesOf('Form/Steps', module);

stories.addParameters({
  readme: {
    sidebar: readme,
  },
  options: {},
});

stories.add('Old Design Steps', OldStepsStory);
stories.add('New Design Steps', NewStepsStory);
