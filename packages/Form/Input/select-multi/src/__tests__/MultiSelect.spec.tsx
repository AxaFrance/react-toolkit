import React from 'react';
import { render } from '@testing-library/react';
import MultiSelect from '../MultiSelect';

export const options = [
  { value: 'fun', label: 'For fun', clearableValue: false },
  { value: 'work', label: 'For work' },
  { value: 'drink', label: 'For drink' },
  { value: 'sleep', label: 'For sleep' },
  { value: 'swim', label: 'For swim' },
];

export const values = ['fun', 'drink'];

test('renders MultiSelect correctly', () => {
  const { asFragment } = render(
    <MultiSelect
      name="placeName"
      onChange={() => null}
      options={options}
      values={values}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
