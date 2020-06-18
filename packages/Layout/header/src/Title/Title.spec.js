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
          toggleMenu={() => null}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Title correctly without menu', () => {
    const tree = renderer
      .create(<Title title="Toolkit Axa" subtitle="Info complémentaire" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
