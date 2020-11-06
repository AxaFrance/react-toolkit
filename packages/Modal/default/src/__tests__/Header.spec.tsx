import React from 'react';
import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import Header from '../Header';

describe('<Header>', () => {
  it('should render header', () => {
    const { asFragment } = render(<Header title="title" onCancel={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText('title')).toBeInTheDocument();
  });

  it('should render id click onCancel', () => {
    const onCancel = jest.fn();
    render(
      <Header title="title" onCancel={onCancel}>
        header
      </Header>
    );
    UserEvent.click(screen.getByRole('button', { name: 'Close' }));
    expect(onCancel).toHaveBeenCalledWith({ id: '' });
  });
});
