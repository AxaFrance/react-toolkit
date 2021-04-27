import React from 'react';
import { shallow } from 'enzyme';
import SliderInput from './SliderInput';

const options = [
  {
    value: 15,
    label: '15',
  },
  { value: 1, label: 1 },
];

describe('<SliderInput>', () => {
  it('renders SliderInput correctly', () => {
    const wrapper = shallow(
      <SliderInput
        options={options}
        label="File *"
        id="id"
        name="file"
        onChange={() => {}}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
