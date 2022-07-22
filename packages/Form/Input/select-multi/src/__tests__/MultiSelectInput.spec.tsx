import React from 'react';
import { render } from '@testing-library/react';
import MultiSelectInput from '../MultiSelectInput';
import { options, values } from './MultiSelect.spec';

test('renders MultiSelectInput correctly', () => {
  const { asFragment } = render(
    <MultiSelectInput
      label="Place type *"
      name="placeType"
      id="multiselectid"
      options={options}
      onChange={jest.fn()}
      values={values}
      helpMessage="Enter the place type"
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
