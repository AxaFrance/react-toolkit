import React from 'react';
import { render } from '@testing-library/react';
import FileInput from '../FileInput';

describe('<FileInput>', () => {
  it('renders FileInput correctly', () => {
    const { asFragment } = render(
      <FileInput
        label="File *"
        id="id"
        name="file"
        onChange={() => {}}
        accept="image/jpeg, image/png, application/*"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
