import React from 'react';
import { render } from '@testing-library/react';
import TextInput from '../TextInput';

describe('TextInput', () => {
  it('renders TextInput correctly with classModifier', () => {
    const { asFragment } = render(
      <TextInput
        label="Image *"
        id="iddateinput"
        value="ici le text"
        classModifier="customtext"
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders TextInput correctly with child', () => {
    const { asFragment } = render(
      <TextInput
        label="Image *"
        id="iddateinput"
        value="ici le text"
        classModifier="customtext">
        <p>child</p>
      </TextInput>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders TextInput correctly with error message', () => {
    const { asFragment } = render(
      <TextInput
        label="Image *"
        id="iddateinput"
        value="ici le text"
        message="error message"
        forceDisplayMessage
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
