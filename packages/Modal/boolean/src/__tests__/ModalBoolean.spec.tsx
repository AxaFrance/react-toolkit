import * as React from 'react';
import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import BooleanModal from '../ModalBoolean';

describe('<BooleanModal>', () => {
  let testingUser: any;

  beforeAll(() => {
    testingUser = UserEvent.setup();
  });

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

  it('should call onSubmit when click on submit', async () => {
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

    await testingUser.click(screen.getByText(/Submit/));
    expect(onSubmit).toHaveBeenCalled();
  });

  it('should call onCancel when click on Cancel', async () => {
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

    await testingUser.click(screen.getByText(/Cancel/));
    expect(onCancel).toHaveBeenCalled();
  });
});
