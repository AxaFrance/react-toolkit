import React from 'react';
import renderer from 'react-test-renderer';
import { Name } from './index';

describe('<Name>', () => {
  it('renders Name correctly', () => {
    const tree = renderer
      .create(
        <Name
          title="Nom de l&apos;application"
          subtitle="Baseline"
          img="test.svg"
          alt="Logo React"
          onClick={() => {
            null;
          }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
