import React from 'react';
import { render } from '@testing-library/react';
import SliderInput from '../SliderInput';

const options = [
  {
    value: 15,
    label: '15',
  },
  { value: 1, label: 1 },
];

describe('<SliderInput>', () => {
  it('renders SliderInput correctly', () => {
    const { asFragment } = render(
      <SliderInput
        options={options}
        label="File *"
        id="id"
        name="file"
        onChange={() => {}}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
