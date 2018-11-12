import React from 'react';
import { shallow } from 'enzyme';
import FileLine from './FileLine';

describe('<File.FileInput>', () => {
  it('renders File.FileInput correctly', () => {
    const wrapper = shallow(
      <FileLine file={{ name: 'name', size: 1, preview: '#' }} id="id" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
