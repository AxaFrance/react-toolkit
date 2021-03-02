import React from 'react';
import { render } from '@testing-library/react';
import File from '../File';

describe('<File.File>', () => {
  it('renders File.File correctly', () => {
    const { asFragment } = render(
      <File
        label="File *"
        id="id"
        name="file"
        onChange={() => {}}
        accept="image/jpeg, image/png, application/*"
        multiple
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
