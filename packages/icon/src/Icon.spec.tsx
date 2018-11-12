import * as React from 'react';
import { create } from 'react-test-renderer';
import Icon from './Icon';

describe('<Icon>', () => {
  it('should render a sante icon', () => {
    const component = create(<Icon icon="sante" />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
