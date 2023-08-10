import React from 'react';
import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import Header from '../Header';

describe('<Header>', () => {
  it('should render header', () => {
    render(<Header title="title" onCancel={() => {}} />);
    expect(screen.getByRole('heading', { name: 'title' })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Fermer la boite de dialogue' })
    ).toBeInTheDocument();
  });

  it('should render id click onCancel', () => {
    const onCancel = jest.fn();
    render(
      <Header title="title" onCancel={onCancel}>
        header
      </Header>
    );
    UserEvent.click(
      screen.getByRole('button', { name: 'Fermer la boite de dialogue' })
    );
    expect(onCancel).toHaveBeenCalledWith({ id: '' });
  });
});
