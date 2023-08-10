import * as React from 'react';
import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import BooleanModal from '../ModalBoolean';

describe('<BooleanModal>', () => {
  it('should render boolean modal', () => {
    render(
      <BooleanModal
        onCancel={() => {}}
        onSubmit={() => {}}
        cancelTitle="Cancel"
        id="uniqueID"
        title="Modal Title"
        submitTitle="Submit">
        Content
      </BooleanModal>
    );
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  const onSubmit = jest.fn();
  const onCancel = jest.fn();

  const Modal = () => {
    const ref = React.useRef<HTMLDialogElement>(null);
    return (
      <>
        <div id="root">
          <button type="button" onClick={() => ref.current?.showModal()}>
            Open
          </button>
        </div>
        <BooleanModal
          onCancel={onCancel}
          onSubmit={onSubmit}
          cancelTitle="Cancel"
          id="uniqueID"
          title="Modal Title"
          submitTitle="Submit"
          ref={ref}>
          Content
        </BooleanModal>
      </>
    );
  };

  it('should call onSubmit when click on submit', () => {
    render(<Modal />);

    UserEvent.click(screen.getByText(/Open/));

    UserEvent.click(screen.getByText(/Submit/));
    expect(onSubmit).toBeCalled();
  });

  it('should call onCancel when click on Cancel', () => {
    render(<Modal />);

    UserEvent.click(screen.getByText(/Cancel/));
    expect(onCancel).toBeCalled();
  });
});
