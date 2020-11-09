import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import ModalCore from '../ModalCore';

const ModalCaller = () => {
  const [open, setIsOpen] = useState(false);
  return (
    <>
      <div id="root">
        <button type="button" onClick={() => setIsOpen(true)}>
          Open
        </button>
        <button type="button" onClick={() => {}}>
          DoNothing
        </button>
      </div>
      <ModalCore
        isOpen={open}
        onOutsideTap={() => setIsOpen(false)}
        title="modalTest">
        Modal Content
      </ModalCore>
    </>
  );
};

describe('<ModalCore>', () => {
  it('should render modalCore', () => {
    const { asFragment } = render(
      <ModalCore isOpen onOutsideTap={jest.fn()}>
        Content
      </ModalCore>,
      { container: document.body }
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should invoke onOutsideTap when modal is close', () => {
    render(<ModalCaller />);
    expect(screen.queryByText(/Modal Content/)).not.toBeInTheDocument();
    UserEvent.click(screen.getByText(/Open/));
    screen.getByText(/Modal Content/);
    UserEvent.type(screen.getByLabelText('modalTest'), '{esc}');
    expect(screen.queryByText(/Modal Content/)).not.toBeInTheDocument();
  });
});
