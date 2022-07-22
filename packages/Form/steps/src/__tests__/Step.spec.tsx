import React from 'react';
import { render } from '@testing-library/react';
import { Steps, Step, StepBase } from '../index';

describe('<Steps>', () => {
  it('renders Steps correctly', () => {
    const { asFragment } = render(
      <Steps>
        <Step
          id="id1"
          href="/etape1"
          onClick={jest.fn()}
          number="1"
          mode="link"
          title="Previous step"
        />
        <StepBase id="idf4" title="Un titre">
          <a className="af-steps-list-stepLabel" href="/#" onClick={jest.fn()}>
            <span className="af-steps-list-stepNumber">
              <i className="glyphicon glyphicon-ok" />
            </span>
            <span className="af-steps-list-stepTitle">Custom</span>
          </a>
        </StepBase>
        <Step id="id5" number="5" title="Final step" mode="disabled" />
      </Steps>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
