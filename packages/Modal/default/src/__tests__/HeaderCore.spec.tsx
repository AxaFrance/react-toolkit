import React from 'react';
import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import HeaderCore from '../HeaderCore';

describe('<HeaderCore', () => {
  const cancel = jest.fn();
  it('should render header', () => {
    const { asFragment } = render(
      <HeaderCore onCancel={cancel}>Title</HeaderCore>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render id click onCancel', () => {
    render(<HeaderCore onCancel={cancel}>Title</HeaderCore>);
    UserEvent.click(screen.getByRole('button', { name: 'Close' }));
    expect(cancel).toBeCalled();
  });
});
