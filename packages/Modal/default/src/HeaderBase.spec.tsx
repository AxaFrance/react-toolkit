import * as React from 'react';
import { create } from 'react-test-renderer';
import HeaderBase from './HeaderBase';


describe('<HeaderBase>', () => {
  it('should render header', () => {
    const component = create(<HeaderBase>content</HeaderBase>);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
