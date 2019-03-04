import * as React from 'react';
import Pane from './Pane';
import { create } from 'react-test-renderer';

describe('<Pane>', () => {
  it('should render component', () => {
    const component = create(
      <Pane active={true}>
        <div>Content</div>
      </Pane>
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
