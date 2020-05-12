import * as React from 'react';
import { create } from 'react-test-renderer';
import Paging from './Paging';
import Items from '../Items/Items';
import Modes from '../Pager/Modes';

describe('Table.Paging', () => {
  it('renders correctly with default values', () => {
    const handleOnChangeMock = jest.fn();
    handleOnChangeMock.mockImplementationOnce(() => 'My mock is called');

    const component = create(
      <Paging
        numberItems={20}
        numberPages={10}
        onChange={handleOnChangeMock}
        currentPage={1}
        id="pagingid"
      />
    );

    expect(component).toMatchSnapshot();
  });

  it('renders correctly with custom values', () => {
    const handleOnChangeMock = jest.fn();
    handleOnChangeMock.mockImplementationOnce(() => 'My mock is called');

    const component = create(
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

    expect(component).toMatchSnapshot();
  });
});
