import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Items from '../Items/Items';

describe('Table.Items', () => {
  it('renders correctly with default values', async () => {
    const handleOnChangeMock = jest.fn();
    handleOnChangeMock.mockImplementationOnce(() => 'My mock is called');

    const { asFragment } = render(
      <Items
        numberItems={10}
        onChange={handleOnChangeMock}
        items={[5, 10, 25, 50, 100]}
        id="itemid"
      />
    );

    await screen.findByText('Afficher');

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with custom values', async () => {
    const handleOnChangeMock = jest.fn().mockReturnValue('My mock is called');

    const { getByRole, getByLabelText, getByText } = render(
      <Items
        numberItems={10}
        onChange={handleOnChangeMock}
        items={[5, 10, 25, 50, 100]}
        id="itemid"
        displayLabel="Show"
        elementsLabel="elements"
      />
    );
    await screen.findByText('Show');

    expect(getByLabelText('Show')).toBeInTheDocument();
    expect(getByText(/elements/)).toBeInTheDocument();

    await userEvent.selectOptions(getByRole('combobox'), ['50']);
    expect(handleOnChangeMock).toHaveBeenCalled();
  });
});
