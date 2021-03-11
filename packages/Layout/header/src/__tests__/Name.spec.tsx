import React from 'react';
import { render } from '@testing-library/react';
import { Name } from '../Name/index';

describe('<Name>', () => {
  it('renders Name correctly', () => {
    const { asFragment } = render(
      <Name
        title="Nom de l'application"
        subtitle="Baseline"
        img="test.svg"
        alt="Logo React"
        onClick={() => null}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
