import React from 'react';
import renderer from 'react-test-renderer';
import NumberInput from './NumberInput';

describe('<NumberInput>', () => {
  it('renders NumberInput correctly', () => {
    const tree = renderer
      .create(
        <NumberInput
          label="Image *"
          id="iddateinput"
          name="placeImage"
          value={2}
          onChange={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
