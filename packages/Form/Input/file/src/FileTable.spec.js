import React from 'react';
import { shallow } from 'enzyme';
import FileTable, { Errors } from './FileTable';

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

  it('renders File.FileTable correctly when no have values', () => {
    const wrapper = shallow(
      <FileTable
        errors={[{ file: { name: 'youhou.txt', size: 2 } }]}
        values={[]}
        onClick={selectedId => console.log(selectedId)}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Errors correctly with errors', () => {
    const wrapper = shallow(
      <Errors errors={[{ file: { name: 'youhou.txt', size: 2 } }]} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('renders Errors correctly with empty errors', () => {
    const wrapper = shallow(<Errors errors={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
