import * as React from 'react';
import {create} from 'react-test-renderer';
import Body from './Body';

describe('<Body>', () => {
  it('should render component', () => {
    const component = create(<Body>content</Body>);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
