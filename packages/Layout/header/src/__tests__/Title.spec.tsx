import React from 'react';
import { render } from '@testing-library/react';
import { Title } from '../Title/index';

describe('<Title>', () => {
  it('renders Title correctly', () => {
    const { asFragment } = render(
      <Title
        title="Toolkit Axa"
        subtitle="Info complémentaire"
        toggleMenu={() => null}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders Title correctly without menu', () => {
    const { asFragment } = render(
      <Title title="Toolkit Axa" subtitle="Info complémentaire" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
