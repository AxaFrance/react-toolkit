import React from 'react';
import { render } from '@testing-library/react';
import Pager from '../Pager/Pager';

describe('Table.Pager', () => {
  const handleOnChangeMock = jest.fn().mockReturnValue('My mock is called');
  it('renders correctly', () => {
    const { asFragment } = render(
      <Pager numberPages={10} onChange={handleOnChangeMock} currentPage={1} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with custom label', () => {
    const { asFragment } = render(
      <Pager
        numberPages={10}
        onChange={handleOnChangeMock}
        currentPage={1}
        previousLabel="< Previous"
        nextLabel="Next >"
        ofLabel="of"
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
