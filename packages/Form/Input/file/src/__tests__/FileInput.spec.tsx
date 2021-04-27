import React from 'react';
import { shallow } from 'enzyme';
import FileInput from '../FileInput';

describe('<FileInput>', () => {
  it('renders FileInput correctly', () => {
    const wrapper = shallow(
      <FileInput
        label="File *"
        id="id"
        name="file"
        onChange={() => {}}
        accept="image/jpeg, image/png, application/*"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
