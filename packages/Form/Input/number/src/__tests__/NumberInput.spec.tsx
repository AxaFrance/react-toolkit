import React from 'react';
import { render } from '@testing-library/react';
import NumberInput from '../NumberInput';

describe('<NumberInput>', () => {
  it('renders NumberInput correctly', () => {
    const { asFragment } = render(
      <NumberInput
        label="Image *"
        id="iddateinput"
        name="placeImage"
        value={2}
        onChange={() => {}}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
