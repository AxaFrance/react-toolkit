import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { Field } from '@axa-fr/react-toolkit-form-core';

import Pass from './Pass';
import PassInputHOC, { PassInput } from './PassInput';

describe('Form/PassInput/Pass', () => {
  test('Pass display correctly', () => {
    const handleOnChangeMock = jest.fn();
    handleOnChangeMock.mockImplementationOnce(() => 'first call');

    const component = renderer.create(
      <Pass
        onChange={handleOnChangeMock}
        name="password"
        onToggleType={jest.fn()}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

const createWrapper = (customProps) => {
  const defaultProps = {
    onToggleType: () => {},
    name: 'password',
    onChange: () => {},
  };
  const actualProps = Object.assign(defaultProps, customProps);
  return mount(<Pass {...actualProps} />);
};

describe('<Pass />', () => {
  describe('Call onChange callback when type value', () => {
    it('Swith from password to text type', () => {
      const onChange = jest.fn();

      const wrapper = createWrapper({
        onChange,
        name: 'passwordtest',
        value: 'testvalue',
        id: 'testid',
      });
      wrapper.find('input.af-form__input-text').simulate('change', {
        target: {
          value: 'changed value',
        },
      });
      expect(onChange).toHaveBeenCalledWith({
        name: 'passwordtest',
        value: 'changed value',
        id: 'testid',
      });
    });
  });

  describe('ToggleType when eye icon is clicked', () => {
    it('Swith from password to text type', () => {
      const onToggleType = jest.fn();

      const wrapper = createWrapper({ onToggleType });
      wrapper
        .find('button.af-form__pass-btn')
        .simulate('click', { preventDefault() {}, stopPropagation() {} });
      expect(onToggleType).toHaveBeenCalled();
    });

    it('Swith from text to password type', () => {
      const onToggleType = jest.fn();
      const wrapper = createWrapper({ onToggleType, type: 'text' });

      wrapper
        .find('button.af-form__pass-btn')
        .simulate('click', { preventDefault() {}, stopPropagation() {} });
      expect(onToggleType).toHaveBeenCalled();
    });
  });
});

const createWrapperPassInputHOC = (customProps) => {
  const defaultProps = {
    name: 'password',
    onToggleType: () => {},
    onChange: () => {},
    label: 'Password *',
    score: null,
  };
  const actualProps = Object.assign(defaultProps, customProps);
  return mount(<PassInputHOC {...actualProps} />);
};

describe('<PassInputHOC />', () => {
  const wrapper = createWrapperPassInputHOC();
  const instance = wrapper.instance();

  describe('onChange', () => {
    describe('Check score password', () => {
      it('When score equal null, strength is null', () => {
        instance.stateUpdaters.onChange({ value: '' });
        expect(instance.state.strength).toBeNull();
      });

      const wrapperBad = createWrapperPassInputHOC({ score: 0 });
      const instanceBad = wrapperBad.instance();
      it('When score = 0, strength is bad', () => {
        instanceBad.stateUpdaters.onChange({ value: 'sam' });
        expect(instanceBad.state.strength).toEqual('bad');
      });
    });
  });

  describe('onToggleType', () => {
    it('When state type equal `text`, toggleType setState to `password`', () => {
      instance.setState({ type: 'text' });
      instance.stateUpdaters.onToggleType();
      expect(instance.state.type).toEqual('password');
    });
    it('When state type equal `password`, toggleType setState to `text`', () => {
      instance.stateUpdaters.onToggleType();
      expect(instance.state.type).toEqual('text');
    });
  });
});

const createWrapperPassInput = (customProps) => {
  const defaultProps = {
    strength: null,
    name: 'password',
    onToggleType: () => {},
    onChange: () => {},
    label: 'Password *',
  };
  const actualProps = Object.assign(defaultProps, customProps);
  return mount(<PassInput {...actualProps} />);
};

describe('<PassInput />', () => {
  describe('classModifier', () => {
    it.only('when strength state is equal `bad` , the classmodifier is apply', () => {
      const wrapper = createWrapperPassInput({ strength: 'bad' });
      const classModifier = wrapper.find(Field).prop('classModifier');
      expect(/bad/.test(classModifier)).toBe(true);
    });
    it('when strength state is equal `null` , the classmodifier is NOT apply', () => {
      const wrapper = createWrapperPassInput();
      const classModifier = wrapper.find(Field).prop('classModifier');
      expect(/bad/.test(classModifier)).toBe(false);
    });
  });
});
