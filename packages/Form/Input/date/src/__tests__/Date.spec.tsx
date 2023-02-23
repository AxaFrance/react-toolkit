import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import CustomDate from '../Date';

describe('Date component', () => {
  it('renders with initial value', () => {
    const initialValue = new Date('2024-03-04');
    const { asFragment, getByDisplayValue } = render(
      <CustomDate value={initialValue} />
    );

    getByDisplayValue('2024-03-04');

    expect(asFragment()).toMatchSnapshot();
  });

  it('calls onChange handler when input value changes', () => {
    const onChangeMock = jest.fn();
    const initialValue = new Date('2024-03-04');
    const { getByLabelText, asFragment } = render(
      <>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="date">Date:</label>
        <CustomDate
          onChange={onChangeMock}
          name="date"
          id="date"
          value={initialValue}
        />
      </>
    );
    const inputElement = getByLabelText('Date:') as HTMLInputElement;

    userEvent.type(inputElement, '2024-03-05');
    expect(inputElement.value).toBe('2024-03-05');

    expect(asFragment()).toMatchSnapshot();
  });

  it('calls onChange handler when input value changes although target value is null', () => {
    const initialValue = new Date('2024-03-04');
    const onChangeMock = jest.fn();
    const { getByLabelText, asFragment } = render(
      <>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="date">Date:</label>
        <CustomDate
          onChange={onChangeMock}
          name="date"
          id="date"
          value={initialValue}
        />
      </>
    );
    const inputElement = getByLabelText('Date:') as HTMLInputElement;

    userEvent.clear(inputElement);

    expect(inputElement.value).toBe('');

    expect(asFragment()).toMatchSnapshot();
  });

  it('applies class modifier', () => {
    const { container, asFragment } = render(
      <CustomDate classModifier="required" />
    );
    container.querySelector('.af-form__input-date--required');

    expect(asFragment()).toMatchSnapshot();
  });
});
