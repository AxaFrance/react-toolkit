import React from 'react';
import { render } from '@testing-library/react';
import AlertCore from '../AlertCore';

describe('<AlertCore />', () => {
  it('renders an error alert with exclamation icon and title', () => {
    const { asFragment } = render(
      <AlertCore
        iconClassName="glyphicon glyphicon-exclamation-sign"
        classModifier="error"
        title="Les caves et les garages situés dans le même corps de bâtiment que le logement assuré sont garantis"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('Shoud contain close element when onClose props exists', () => {
    const onCloseMock = jest.fn();
    const { getByRole } = render(
      <AlertCore title="Succès" iconClassName="success" onClose={onCloseMock} />
    );
    expect(getByRole('button')).toBeInTheDocument();
  });
});
