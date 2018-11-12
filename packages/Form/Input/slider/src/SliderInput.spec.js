import React from 'react';
import { shallow } from 'enzyme';
import SliderInput from './SliderInput';

describe('<SliderInput>', () => {
  it('renders SliderInput correctly', () => {
    const wrapper = shallow(
      <SliderInput label="File *" id="id" name="file" onChange={() => {}} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
