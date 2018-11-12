import React from 'react';
import renderer from 'react-test-renderer';
import { Title } from './index';

describe('<Title>', () => {
  it('renders Title correctly', () => {
    const tree = renderer
      .create(
        <Title
          title="Toolkit Axa"
          subtitle="Info complémentaire"
          onClick={() => null}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
