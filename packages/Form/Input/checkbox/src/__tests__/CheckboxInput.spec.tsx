import React from 'react';
import { render } from '@testing-library/react';
import CheckboxInput from '../CheckboxInput';

describe('<CheckboxInput>', () => {
  it('renders CheckboxInput correctly', () => {
    const { asFragment } = render(
      <CheckboxInput
        label="Image *"
        id="iddateinput"
        name="placeImage"
        options={[{ label: 'name', value: '1', id: 'id' }]}
        values={[]}
        onChange={() => {}}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
