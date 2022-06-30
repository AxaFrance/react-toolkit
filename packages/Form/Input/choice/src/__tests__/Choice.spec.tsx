import React from 'react';
import { render } from '@testing-library/react';
import ChoiceInput from '../ChoiceInput';

describe('<ChoiceInput>', () => {
  it('renders ChoiceInput correctly when passing options without ID', () => {
    const { asFragment } = render(
      <ChoiceInput
        label="Some label"
        id="xxx"
        name="xxx"
        options={[
          { label: 'Yes', value: 'true', id: '1' },
          { label: 'No', value: 'false', id: '2' },
        ]}
        onChange={() => {}}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders ChoiceInput correctly when passing options with ID', () => {
    const { asFragment } = render(
      <ChoiceInput
        label="Some label"
        id="xxx"
        name="xxx"
        options={[
          { label: 'Yes', value: 'true', id: 'xxx_Yes' },
          { label: 'No', value: 'false', id: 'xxx_No' },
        ]}
        onChange={() => {}}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders ChoiceInput correctly with default options', () => {
    const { asFragment } = render(
      <ChoiceInput
        label="Some label"
        id="xxx"
        name="xxx"
        onChange={() => {}}
        options={[
          { label: 'Oui', value: 'true', id: 'oui' },
          { label: 'Non', value: 'false', id: 'non' },
        ]}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
