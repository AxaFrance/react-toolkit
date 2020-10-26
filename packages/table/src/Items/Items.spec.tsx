import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Items from './Items';

describe('Table.Items', () => {
  it('renders correctly with default values', () => {
    const handleOnChangeMock = jest.fn();
    handleOnChangeMock.mockImplementationOnce(() => 'My mock is called');

    const component = create(
      <Items
        numberItems={10}
        onChange={handleOnChangeMock}
        items={[5, 10, 25, 50, 100]}
        id="itemid"
      />
    );

    expect(component).toMatchSnapshot();
  });

  it('renders correctly with custom values', () => {
    const handleOnChangeMock = jest.fn();
    handleOnChangeMock.mockImplementationOnce(() => 'My mock is called');

    const component = create(
      <Items
        numberItems={10}
        onChange={handleOnChangeMock}
        items={[5, 10, 25, 50, 100]}
        id="itemid"
        displayLabel="Show"
        elementsLabel="elements"
      />
    );

    expect(component).toMatchSnapshot();
  });

  test('handleChange when value updated', () => {
    const handleOnChangeMock = jest.fn();
    handleOnChangeMock.mockImplementationOnce(() => 'My mock is called');
    const preventDefaultMock = jest.fn();
    preventDefaultMock.mockImplementationOnce(() => 'My mock is called');

    const component = mount(
      <Items
        numberItems={10}
        onChange={handleOnChangeMock}
        items={[5, 10, 25, 50, 100]}
        id="itemid"
        displayLabel="show"
        elementsLabel="elements"
      />
    );

    component.find('select').simulate('change', {
      target: { value: '50' },
      preventDefault: preventDefaultMock,
    });

    expect(handleOnChangeMock).toBeCalled();
    expect(preventDefaultMock).toBeCalled();
  });
});
