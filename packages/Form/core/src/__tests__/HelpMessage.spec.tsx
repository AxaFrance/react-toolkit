import React from 'react';
import { render } from '@testing-library/react';
import HelpMessage from '../HelpMessage';

const defaultProps = {
  message: "Message d'aide à la saisie",
};

describe('HelpMessage', () => {
  it('Render <HelpMessage/> when is visible', () => {
    const { asFragment, getByText } = render(<HelpMessage {...defaultProps} />);
    expect(getByText("Message d'aide à la saisie")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
  it('Render <HelpMessage/> when is not visible', () => {
    const { asFragment } = render(
      <HelpMessage {...defaultProps} isVisible={false} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
