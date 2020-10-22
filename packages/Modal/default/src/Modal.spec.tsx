import * as React from 'react';
import {mount} from 'enzyme';
import Modal from './Modal';

describe('<Modal>', () => {
  it('should render modal', () => {
    const modal = mount(<Modal isOpen onOutsideTap={jest.fn()}>Content</Modal>);
    expect(modal).toMatchSnapshot();
  });
});
