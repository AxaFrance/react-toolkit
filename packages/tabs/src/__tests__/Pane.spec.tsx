import React from 'react';
import { render, screen } from '@testing-library/react';
import Pane from '../Pane';

describe('<Pane>', () => {
  it('should render component', () => {
    render(
      <Pane active>
        <div>Content</div>
      </Pane>
    );
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
