import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Summary } from './index';

describe('<Summary>', () => {
  it('Renders correctly with default props', () => {
    const tree = renderer.create(<Summary />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders correctly when not visible', () => {
    const tree = renderer.create(<Summary isVisible={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders correctly when visible', () => {
    const messages = ['Sample message 1', '', 'Sample message 2', null];
    const tree = renderer.create(<Summary messages={messages} isVisible={true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
