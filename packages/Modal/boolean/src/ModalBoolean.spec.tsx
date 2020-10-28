import * as React from 'react';
import { mount } from 'enzyme';
import BooleanModal from './ModalBoolean';

describe('<BooleanModal>', () => {
  it('should render boolean modal', () => {
    const modal = mount(
      <BooleanModal
        isOpen
        onCancel={() => {}}
        onSubmit={() => {}}
        cancelTitle="Cancel"
        id="uniqueID"
        title="Modal Title"
        submitTitle="Submit">
        Content
      </BooleanModal>
    );
    expect(modal).toMatchSnapshot();
  });
});
