import React from 'react';
import { render } from '@testing-library/react';
import TextareaInput from '../TextareaInput';

test('renders TextareaInput correctly', () => {
  const { asFragment } = render(
    <TextareaInput
      label="Image *"
      name="sample"
      id="iddateinput"
      value="ici le text"
      onChange={() => {}}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
