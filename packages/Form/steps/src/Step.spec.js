import React from 'react';
import renderer from 'react-test-renderer';
import { Steps, Step, StepBase, StepModes } from './index';

describe('<Steps>', () => {
  it('renders Steps correctly', () => {
    const onClick = () => null;
    const tree = renderer
      .create(
        <Steps>
          <Step
            id="id1"
            href="/etape1"
            onClick={onClick}
            number="1"
            mode={StepModes.link}
            title="Previous step"
          />
          <StepBase id="idf4" title="Un titre">
            <a className="af-steps-list-stepLabel" href="#" onClick={onClick}>
              <span className="af-steps-list-stepNumber">
                <i className="glyphicon glyphicon-ok" />
              </span>
              <span className="af-steps-list-stepTitle">Custom</span>
            </a>
          </StepBase>
          <Step
            id="id5"
            number="5"
            title="Final step"
            mode={StepModes.disabled}
          />
        </Steps>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
