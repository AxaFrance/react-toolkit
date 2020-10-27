import * as React from 'react';
import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import BooleanModal from './ModalBoolean';

describe('<BooleanModal>', () => {
  it('should render boolean modal', () => {
    const { asFragment } = render(
      <BooleanModal
        isOpen
        onCancel={() => {}}
        onSubmit={() => {}}
        cancelTitle="Cancel"
        id="uniqueID"
        title="Modal Title"
        submitTitle="Submit">
        Content
      </BooleanModal>,
      { container: document.body }
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should call onSubmit when click on submit', () => {
    const onSubmit = jest.fn();
    render(
      <BooleanModal
        isOpen
        onCancel={() => {}}
        onSubmit={onSubmit}
        cancelTitle="Cancel"
        id="uniqueID"
        title="Modal Title"
        submitTitle="Submit">
        Content
      </BooleanModal>
    );

    UserEvent.click(screen.getByText(/Submit/));
    expect(onSubmit).toBeCalled();
  });

  it('should call onCancel when click on Cancel', () => {
    const onCancel = jest.fn();
    render(
      <BooleanModal
        isOpen
        onCancel={onCancel}
        onSubmit={() => {}}
        cancelTitle="Cancel"
        id="uniqueID"
        title="Modal Title"
        submitTitle="Submit">
        Content
      </BooleanModal>
    );

    UserEvent.click(screen.getByText(/Cancel/));
    expect(onCancel).toBeCalled();
  });
});
