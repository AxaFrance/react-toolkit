import React from 'react';
import { render } from '@testing-library/react';
import SwitchInput from '../SwitchInput';

describe('<SwitchInput>', () => {
  it('renders SwitchInput correctly', () => {
    const { asFragment } = render(
      <SwitchInput
        value="actif"
        disabled={false}
        label="Image *"
        id="iddateinput"
        name="placeImage"
        options={[{ value: 'value', label: 'label', id: 'id' }]}
        onChange={() => {}}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
