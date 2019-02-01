import * as React from 'react';
import { create } from 'react-test-renderer';
import ButtonCore from './ButtonCore';

describe('<ButtonCore>', () => {
  it('should render component', () => {
    const component = create(<ButtonCore onClick={jest.fn()}>Content</ButtonCore>);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
