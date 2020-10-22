import React from 'react';
import { render, screen } from '@testing-library/react';
import DateInput from './DateInput';

describe('<DateInput>', () => {
  it('renders DateInput correctly', async () => {
    const { asFragment } = render(
      <DateInput
        label="date de naissance"
        id="iddateinput"
        name="placeImage"
        onChange={() => {}}
        locale="fr"
      />
    );
    await screen.findByRole('textbox');
    expect(asFragment()).toMatchSnapshot();
  });
});
