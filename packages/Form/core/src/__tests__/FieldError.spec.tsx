import React from 'react';
import { render } from '@testing-library/react';
import FieldError from '../FieldError';
import MessageTypes from '../MessageTypes';

const defaultProps = {
  message: 'Champ obligatoire',
  messageType: MessageTypes.error,
};

describe('FieldError', () => {
  it('Should render <FieldError/>', () => {
    const { asFragment, getByText } = render(<FieldError {...defaultProps} />);
    expect(getByText('Champ obligatoire')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should not render <FieldError/> when message undefined', () => {
    const { asFragment } = render(
      <FieldError {...defaultProps} message={undefined} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
