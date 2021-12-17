import React from 'react';
import { render } from '@testing-library/react';
import Field from '../Field';

describe('<Field>', () => {
  it('renders Field correctly', () => {
    const { asFragment } = render(
      <Field id="id" label="label" message="message">
        <input type="text" />
      </Field>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
