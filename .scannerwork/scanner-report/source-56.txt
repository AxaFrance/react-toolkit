import * as React from 'react';
import Body from './Body';
import {create} from 'react-test-renderer';

describe('<Body>', () => {
  it('should render component', () => {
    const component = create(<Body>content</Body>);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
