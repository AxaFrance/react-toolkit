import React from 'react';
import renderer from 'react-test-renderer';
import MultiSelectInput from './MultiSelectInput';
import { options, values } from './MultiSelect.spec';

describe('<MultiSelect>', () => {
  it('renders MultiSelectInput correctly', () => {
    const tree = renderer
      .create(
        <MultiSelectInput
          label="Place type *"
          name="placeType"
          id="multiselectid"
          options={options}
          onChange={() => null}
          values={values}
          helpMessage="Enter the place type"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
