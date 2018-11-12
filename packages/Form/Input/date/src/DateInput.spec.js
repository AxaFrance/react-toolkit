import React from 'react';
import renderer from 'react-test-renderer';
import DateInput from './DateInput';

describe('<DateInput>', () => {
  it('renders DateInput correctly', () => {
    const tree = renderer
      .create(
        <DateInput
          label="Image *"
          id="iddateinput"
          name="placeImage"
          onChange={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
