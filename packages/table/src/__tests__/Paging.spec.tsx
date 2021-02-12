import React from 'react';
import { render } from '@testing-library/react';
import Paging from '../Paging/Paging';
import Modes from '../Pager/Modes';

describe('Table.Paging', () => {
  it('renders correctly with default values', () => {
    const handleOnChangeMock = jest.fn();
    handleOnChangeMock.mockImplementationOnce(() => 'My mock is called');

    const { asFragment } = render(
      <Paging
        numberItems={20}
        numberPages={10}
        onChange={handleOnChangeMock}
        currentPage={1}
        id="pagingid"
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with custom values', () => {
    const handleOnChangeMock = jest.fn();
    handleOnChangeMock.mockImplementationOnce(() => 'My mock is called');

    const { asFragment } = render(
      <Paging
        numberItems={20}
        numberPages={10}
        onChange={handleOnChangeMock}
        currentPage={1}
        id="pagingid"
        previousLabel="« Previous"
        nextLabel="Next »"
        ofLabel="of"
        displayLabel="Show"
        elementsLabel="elements"
        mode={Modes.light}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
