import React from 'react';
import renderer from 'react-test-renderer';
import ChoiceInput from './ChoiceInput';

describe('<ChoiceInput>', () => {
  it('renders ChoiceInput correctly when passing options without ID', () => {
    const tree = renderer
      .create(
        <ChoiceInput
          label="Some label"
          id="xxx"
          name="xxx"
          options={[{ label: 'Yes', value: true }, { label: 'No', value: false }]}
          onChange={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders ChoiceInput correctly when passing options with ID', () => {
    const tree = renderer
      .create(
        <ChoiceInput
          label="Some label"
          id="xxx"
          name="xxx"
          options={[{ label: 'Yes', value: true, id: 'xxx_Yes' }, { label: 'No', value: false, id: 'xxx_No' }]}
          onChange={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders ChoiceInput correctly with default options', () => {
    const tree = renderer
      .create(
        <ChoiceInput
          label="Some label"
          id="xxx"
          name="xxx"
          onChange={() => {}}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
