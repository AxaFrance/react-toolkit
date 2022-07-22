import React from 'react';
import { render } from '@testing-library/react';
import Infos from '../Infos/Infos';

describe('<Infos>', () => {
  it('renders Infos correctly', () => {
    const { queryByText } = render(
      <Infos infos={[{ word: 'Client', definition: '123456', id: '1' }]} />
    );
    expect(queryByText('Client')).toBeInTheDocument();
    expect(queryByText('123456')).toBeInTheDocument();
  });

  it('renders Infos with reactNode', () => {
    const { queryByText } = render(
      <Infos
        infos={[
          {
            word: 'Client',
            definition: <span className="new_definition">123456</span>,
            id: '1',
          },
        ]}
      />
    );
    expect(queryByText('Client')).toBeInTheDocument();
    const definition = document.getElementsByClassName('new_definition');
    expect(definition.length).toBe(1);
  });
});
