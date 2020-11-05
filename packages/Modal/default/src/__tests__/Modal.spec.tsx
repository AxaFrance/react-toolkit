import React from 'react';
import { render, screen } from '@testing-library/react';

import Modal from '../Modal';

describe('<Modal>', () => {
  const onClose = jest.fn();
  it('should render modal', () => {
    const { asFragment } = render(
      <Modal isOpen onOutsideTap={onClose}>
        Content
      </Modal>,
      { container: document.body }
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should Show modal when isOpen is true', () => {
    render(
      <Modal isOpen onOutsideTap={onClose} title="My title">
        Content
      </Modal>
    );
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('should not Show modal when isOpen is false', () => {
    render(
      <Modal isOpen={false} onOutsideTap={onClose} title="My title">
        Content
      </Modal>
    );
    expect(screen.queryByText('Content')).not.toBeInTheDocument();
  });
});
