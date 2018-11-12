import React from 'react';
import { shallow } from 'enzyme';
import File from './File';

describe('<File.File>', () => {
  it('renders File.File correctly', () => {
    const wrapper = shallow(
      <File
        label="File *"
        id="id"
        name="file"
        onOpenClick={() => {}}
        accept="image/jpeg, image/png, application/*"
        multiple
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
