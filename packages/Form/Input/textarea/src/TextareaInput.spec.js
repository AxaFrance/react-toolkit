import React from 'react';
import renderer from 'react-test-renderer';
import TextareaInput from './TextareaInput';

describe('<SwitchInput>', () => {
  it('renders SwitchInput correctly', () => {
    const tree = renderer
      .create(
        <TextareaInput
          label="Image *"
          name="sample"
          id="iddateinput"
          value="ici le text"
          onChange={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
