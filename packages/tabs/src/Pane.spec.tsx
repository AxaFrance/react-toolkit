import React from 'react';
import { create } from 'react-test-renderer';
import Pane from './Pane';

describe('<Pane>', () => {
  it('should render component', () => {
    const component = create(
      <Pane active>
        <div>Content</div>
      </Pane>
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
