import * as React from 'react';
import {mount} from 'enzyme';
import ModalCore from './ModalCore';
import * as ReactModal from 'react-modal';

describe('<ModalCore>', () => {
  it('should render modalCore', () => {
    const component = mount(<ModalCore isOpen={true} onOutsideTap={jest.fn()}>Content</ModalCore>);
    expect(component).toMatchSnapshot();
  });

  it('should invoke onOutsideTap when modal is close', () => {
    const onOutsideTap = jest.fn();
    const component = mount(<ModalCore isOpen={true} onOutsideTap={onOutsideTap}>Content</ModalCore>);
    const event = jest.fn<React.MouseEvent>();
    component.find<ReactModal.Props>(ReactModal).prop('onRequestClose')(event());
    expect(onOutsideTap).toHaveBeenCalled();
  });
});
