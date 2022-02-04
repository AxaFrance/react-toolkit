import React from 'react';
import { render } from '@testing-library/react';
import TextInput from '../TextInput';

test('renders TextInput correctly', () => {
  const { asFragment } = render(
    <TextInput label="Image *" id="iddateinput" value="ici le text" />
  );
  expect(asFragment()).toMatchSnapshot();
});
