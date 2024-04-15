import React from 'react';
import { render } from '@testing-library/react';
import { HeaderTitle } from '../HeaderTitle/index';

describe('<HeaderTitle>', () => {
  it('renders HeaderTitle correctly', () => {
    const { asFragment } = render(
      <HeaderTitle
        title="Toolkit Axa"
        subtitle="Info complémentaire"
        toggleMenu={() => null}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders HeaderTitle correctly without menu', () => {
    const { asFragment } = render(
      <HeaderTitle title="Toolkit Axa" subtitle="Info complémentaire" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders HeaderTitle with classModifier', () => {
    const { asFragment } = render(
      <HeaderTitle
        title="Toolkit Axa"
        subtitle="Info complémentaire"
        classModifier="test"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
