import React from 'react';
import { create } from 'react-test-renderer';
import Footer from './Footer';

describe('<Footer>', () => {
  it('should render footer', () => {
    const component = create(<Footer>content</Footer>);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
