import React from 'react';
import { shallow } from 'enzyme';
import Slider from './Slider';

describe('<Slider>', () => {
  it('renders Slider correctly', () => {
    const wrapper = shallow(
      <Slider
        label="File *"
        id="id"
        name="file"
        options={[]}
        onChange={() => {}}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
