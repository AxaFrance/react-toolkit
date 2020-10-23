import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import React from 'react';
import Button from './Button';

describe('<ButtonBase>', () => {
  it('should render', () => {
    const component = create(
      <Button
        type="submit"
        id="id"
        classModifier="classModifier"
        onClick={jest.fn()}
      />
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('onClick should return id', () => {
    const onClickMock = jest.fn();
    const wrapper = mount(
      <Button type="submit" id="id" className="class" onClick={onClickMock}>
        <span className="af-btn__text">Récapitulatif</span>
        <i className="glyphicon glyphicon-arrowthin-right" />
      </Button>
    );
    wrapper.find('button').simulate('click');
    expect(onClickMock).toHaveBeenCalledWith({ id: 'id' });
  });
});
