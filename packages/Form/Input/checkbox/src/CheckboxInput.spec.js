import React from 'react';
import renderer from 'react-test-renderer';
import CheckboxInput from './CheckboxInput';

describe('<DateInput>', () => {
  it('renders DateInput correctly', () => {
    const tree = renderer
      .create(
        <CheckboxInput
          label="Image *"
          id="iddateinput"
          name="placeImage"
          options={[]}
          values={[]}
          onChange={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
