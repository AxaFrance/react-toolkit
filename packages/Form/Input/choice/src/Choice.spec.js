import React from 'react';
import renderer from 'react-test-renderer';
import ChoiceInput from './ChoiceInput';

describe('<ChoiceInput>', () => {
  it('renders ChoiceInput correctly', () => {
    const tree = renderer
      .create(
        <ChoiceInput
          label="Image *"
          id="iddateinput"
          name="placeImage"
          options={[{ id: 'iddateinput', value: 'sample' }]}
          onChange={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
