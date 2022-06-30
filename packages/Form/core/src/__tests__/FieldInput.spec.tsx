import React from 'react';
import { render } from '@testing-library/react';
import FieldInput from '../FieldInput';

const defaultProps = {};

describe('FieldInput', () => {
  it('Render <FieldInput/> when is visible', () => {
    const { asFragment } = render(<FieldInput {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Render <FieldInput/> when is not visible', () => {
    const { asFragment } = render(
      <FieldInput {...defaultProps} isVisible={false} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('Render <FieldInput/> when is visible and with className and classModifier', () => {
    const { asFragment } = render(
      <FieldInput
        {...defaultProps}
        className="af-field-input"
        classModifier="test">
        <input type="text" name="id" id="id" />
      </FieldInput>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
