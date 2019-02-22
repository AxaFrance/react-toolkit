import * as React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Items from './Items';

describe('Table.Items', () => {
  it('renders correctly', () => {
    const handleOnChangeMock = jest.fn();
    handleOnChangeMock.mockImplementationOnce(() => 'My mock is called');

    const component = renderer.create(
      <Items
        numberItems={10}
        onChange={handleOnChangeMock}
        items={[5, 10, 25, 50, 100]}
        id="itemid"
      />
    );

    expect(component).toMatchSnapshot();
  });

  test('handleChange when value updated', () => {
    const handleOnChangeMock = jest.fn();
    handleOnChangeMock.mockImplementationOnce(() => 'My mock is called');
    const preventDefaultMock = jest.fn();
    preventDefaultMock.mockImplementationOnce(() => 'My mock is called');

    const component = shallow(
      <Items
        numberItems={10}
        onChange={handleOnChangeMock}
        items={[5, 10, 25, 50, 100]}
        id="itemid"
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
