import React from 'react';
import { render } from '@testing-library/react';
import ChoiceInput from '../ChoiceInput';

describe('<ChoiceInput>', () => {
  it('renders ChoiceInput correctly when passing options without ID', () => {
    const { asFragment } = render(
      <ChoiceInput
        value
        label="Some label"
        id="xxx"
        name="xxx"
        options={[
          { label: 'Yes', value: true },
          { label: 'No', value: false },
        ]}
        onChange={() => {}}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders ChoiceInput correctly when passing options with ID', () => {
    const { asFragment } = render(
      <ChoiceInput
        value
        label="Some label"
        id="xxx"
        name="xxx"
        options={[
          { label: 'Yes', value: true, id: 'xxx_Yes' },
          { label: 'No', value: false, id: 'xxx_No' },
        ]}
        onChange={() => {}}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders ChoiceInput correctly with default options', () => {
    const { asFragment } = render(
      <ChoiceInput
        value
        label="Some label"
        id="xxx"
        name="xxx"
        onChange={() => {}}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
