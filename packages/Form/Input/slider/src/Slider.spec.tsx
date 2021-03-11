import React from 'react';
import { render } from '@testing-library/react';
import Slider from './Slider';

describe('<Slider>', () => {
  it('renders Slider correctly', () => {
    const { asFragment } = render(
      <Slider
        label="File *"
        id="id"
        name="file"
        options={[]}
        onChange={() => {}}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
