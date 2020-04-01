import React from 'react';
import renderer from 'react-test-renderer';
import DatePhoneInput from './DatePhoneInput';

describe('<DateInput>', () => {
  it('renders DatePhoneInput correctly', () => {
    const tree = renderer
      .create(
        <DatePhoneInput
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
