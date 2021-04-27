import React from 'react';
import renderer from 'react-test-renderer';
import TextInput from './TextInput';

describe('<TextInput>', () => {
  it('renders SwitchInput correctly', () => {
    const tree = renderer
      .create(
        <TextInput label="Image *" id="iddateinput" value="ici le text" />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
