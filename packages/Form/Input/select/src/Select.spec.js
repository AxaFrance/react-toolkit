import React from 'react';
import renderer from 'react-test-renderer';
import Select from './Select';
import SelectBase from './SelectBase';
import SelectInput from './SelectInput';

const options = [
  { value: 'fun', label: 'For fun' },
  { value: 'work', label: 'For work' },
  { value: 'drink', label: 'For drink' },
];

describe('<SelectBase>', () => {
  const Comp = Compo => (
    <Compo
      name="placeName"
      id="muid"
      onChange={() => null}
      options={options}
      value="myvalue"
    />
  );

  it('renders SelectBase correctly', () => {
    const tree = renderer.create(Comp(Select)).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders SelectBase correctly', () => {
    const tree = renderer.create(Comp(SelectBase)).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders SelectBase correctly', () => {
    const tree = renderer
      .create(
        <SelectInput
          name="placeName"
          id="muid"
          onChange={() => null}
          options={options}
          value="myvalue"
          helpMessage="Enter the place type"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
