import React from 'react';
import renderer from 'react-test-renderer';
import Field from './Field';

describe('<Field>', () => {
  it('renders Field correctly', () => {
    const tree = renderer
      .create(
        <Field id="id" label="label" message="message">
          <input type="text" />
        </Field>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
