import React from 'react';
import renderer from 'react-test-renderer';
import RadioInput from './RadioInput';

describe('<DateInput>', () => {
  it('renders DateInput correctly', () => {
    const tree = renderer
      .create(
        <RadioInput
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
