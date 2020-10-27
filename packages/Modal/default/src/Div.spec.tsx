import React from 'react';
import { create } from 'react-test-renderer';
import Div from './Div';

describe('<Div>', () => {
  it('should render div', () => {
    const component = create(<Div>content</Div>);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
