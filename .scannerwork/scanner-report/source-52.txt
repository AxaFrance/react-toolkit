import * as React from 'react';
import HeaderBase from './HeaderBase';

import { create } from 'react-test-renderer';

describe('<HeaderBase>', () => {
  it('should render header', () => {
    const component = create(<HeaderBase>content</HeaderBase>);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
