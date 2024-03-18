import { render } from '@testing-library/react';
import React from 'react';
import DateInput from '../DateInput';

describe('<NumberInput>', () => {
  it('renders DateInput correctly', () => {
    const { asFragment, getByLabelText } = render(
      <DateInput
        label="Date début"
        id="iddateinput"
        name="namedateinput"
        value={new Date('2024-03-04')}
        onChange={() => {}}
      />
    );

    expect(asFragment()).toMatchSnapshot();

    const inputElement = getByLabelText('Date début');
    expect(inputElement).toHaveAttribute('type', 'date');
    expect(inputElement).toHaveValue('2024-03-04');
    expect(inputElement).toHaveClass('af-form__input-date');

    expect(inputElement.id).toBe('iddateinput');
  });
});
