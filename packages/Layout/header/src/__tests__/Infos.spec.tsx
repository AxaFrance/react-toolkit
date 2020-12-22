import React from 'react';
import { render } from '@testing-library/react';
import Infos from '../Infos/Infos';

describe('<Infos>', () => {
  it('renders Infos correctly', () => {
    const { asFragment } = render(
      <Infos infos={[{ word: 'word', definition: 'definition', id: '1' }]} />
    );
    expect(asFragment).toMatchSnapshot();
  });
});
