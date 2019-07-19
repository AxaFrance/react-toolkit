import React from 'react';
import renderer from 'react-test-renderer';
import SwitchInput from './SwitchInput';

describe('<SwitchInput>', () => {
  it('renders SwitchInput correctly', () => {
    const tree = renderer
      .create(
        <SwitchInput
          label="Image *"
          id="iddateinput"
          name="placeImage"
          options={[]}
          onChange={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
