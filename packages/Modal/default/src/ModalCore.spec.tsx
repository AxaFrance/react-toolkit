import * as React from 'react';
import { mount } from 'enzyme';
import * as ReactModal from 'react-modal';
import ModalCore from './ModalCore';

describe('<ModalCore>', () => {
  it('should render modalCore', () => {
    const component = mount(
      <ModalCore isOpen onOutsideTap={jest.fn()}>
        Content
      </ModalCore>
    );
    expect(component).toMatchSnapshot();
  });

  it('should invoke onOutsideTap when modal is close', () => {
    const onOutsideTap = jest.fn();
    const component = mount(
      <ModalCore isOpen onOutsideTap={onOutsideTap}>
        Content
      </ModalCore>
    );
    const event = jest.fn();
    component.find<ReactModal.Props>(ReactModal).prop('onRequestClose')(
      event()
    );
    expect(onOutsideTap).toHaveBeenCalled();
  });
});
