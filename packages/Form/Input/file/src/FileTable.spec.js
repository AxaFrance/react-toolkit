import React from 'react';
import { shallow } from 'enzyme';
import FileTable from './FileTable';

describe('<File.FileTable>', () => {
  it('renders File.FileTable correctly', () => {
    const wrapper = shallow(
      <FileTable
        errors={[{ file: { name: 'youhou.txt', size: 2 } }]}
        values={[{ file: {}, id: 'id' }]}
        onClick={selectedId => console.log(selectedId)}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
