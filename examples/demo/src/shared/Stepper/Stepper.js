import React from 'react';
import { Steps, Step, StepBase } from '@axa-fr/react-toolkit-all';
import './Stepper.scss';

const Stepper = ({ activeStep }) => (
  <Steps classModifier="devis" className="af-steps-new">
    <Step
      id="id1"
      href="/quote/new"
      onClick={() => {}}
      number="1"
      title="Nouveau devis"
      icon="glyphicon-arrow-rounded-right"
    />
    <StepBase
      id="idf4"
      title="Confirmation"
      classModifier={`${activeStep === 'confirm' ? 'success' : ''}`}>
      <div className="af-steps-list-stepLabel" onClick={() => {}}>
        <span className="af-steps-list-stepNumber">
          <i className="glyphicon glyphicon-ok" />
        </span>
        <span className="af-steps-list-stepTitle">Confirmation</span>
      </div>
    </StepBase>
  </Steps>
);

export default Stepper;
