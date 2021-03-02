import React from 'react';
import { render } from '@testing-library/react';
import Pane from '../Pane';

describe('<Pane>', () => {
  it('should render component', () => {
    const { asFragment } = render(
      <Pane active>
        <div>Content</div>
      </Pane>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
