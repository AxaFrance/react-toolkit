import React from 'react';
import renderer from 'react-test-renderer';
import MultiSelect from './MultiSelect';

export const options = [
  { value: 'fun', label: 'For fun', clearableValue: false },
  { value: 'work', label: 'For work' },
  { value: 'drink', label: 'For drink' },
  { value: 'sleep', label: 'For sleep' },
  { value: 'swim', label: 'For swim' },
];

export const values = ['fun', 'drink'];

describe('<MultiSelect>', () => {
  it('renders MultiSelect correctly', () => {
    const tree = renderer
      .create(
        <MultiSelect
          name="placeName"
          onChange={() => null}
          options={options}
          values={values}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
