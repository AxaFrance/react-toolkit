import React, { ComponentProps } from 'react';
import { shallow } from 'enzyme';
import { Field, MessageTypes } from '@axa-fr/react-toolkit-form-core';
import RadioInput from './RadioInput';
import Radio from './Radio';
import { RadioModes } from '.';

describe('<RadioInput />', () => {
  let radioInputProps: ComponentProps<typeof RadioInput>;

  beforeEach(() => {
    radioInputProps = {
      message: 'test',
      messageType: MessageTypes.error,
      options: [
        { label: 'Option 1', value: '1', id: 'option1_id' },
        { label: 'Option 2', value: '2', id: 'option2_id' },
      ],
      id: '123',
      label: 'test',
    };
  });

  const Act = () =>
    shallow<typeof RadioInput>(<RadioInput {...radioInputProps} />);

  it('should have correct html rendered', () => {
    const result = Act();
    expect(result.html).toMatchSnapshot();
  });

  describe('Radio Child', () => {
    it.each`
      classModifier | expected
      ${''}         | ${'error'}
      ${'test'}     | ${'test error'}
      ${undefined}  | ${'error'}
      ${null}       | ${'error'}
    `(
      'should pass "$expected" to classModifier when classModifier is $classModifier',
      ({ classModifier, expected }) => {
        radioInputProps.forceDisplayMessage = true;
        radioInputProps.classModifier = classModifier;
        const result = Act();
        expect(result.find(Radio).props().classModifier).toEqual(expected);
      }
    );

    it.each`
      messageType
      ${null}
      ${undefined}
      ${''}
    `(
      'should pass "test" to classModifier when messageType is $messageType',
      ({ messageType }) => {
        radioInputProps.classModifier = 'test';
        radioInputProps.messageType = messageType;
        radioInputProps.forceDisplayMessage = true;
        const result = Act();
        expect(result.find(Radio).props().classModifier).toEqual('test');
      }
    );

    it.each`
      forceDisplayMessage | expected
      ${true}             | ${'error'}
      ${false}            | ${''}
      ${undefined}        | ${''}
      ${null}             | ${''}
    `(
      'should pass "$expected" to classModifier when forceDisplayMessage is $forceDisplayMessage',
      ({ forceDisplayMessage, expected }) => {
        radioInputProps.forceDisplayMessage = forceDisplayMessage;
        const result = Act();
        expect(result.find(Radio).props().classModifier).toEqual(expected);
      }
    );
  });

  describe('Field Child', () => {
    it.each`
      classModifier | expected
      ${''}         | ${'label-top'}
      ${'test'}     | ${'test label-top'}
      ${undefined}  | ${'label-top'}
      ${null}       | ${'label-top'}
    `(
      'should pass "$expected" to classModifier when classModifier is $classModifier',
      ({ classModifier, expected }) => {
        radioInputProps.mode = RadioModes.classic;
        radioInputProps.classModifier = classModifier;
        const result = Act();
        expect(result.find(Field).props().classModifier).toEqual(expected);
      }
    );

    it('should pass "test" to classModifier when mode is default', () => {
      radioInputProps.mode = RadioModes.default;
      radioInputProps.classModifier = 'test';
      const result = Act();
      expect(result.find(Field).props().classModifier).toEqual('test');
    });

    it.each`
      mode                  | expected
      ${RadioModes.classic} | ${'label-top'}
      ${RadioModes.default} | ${''}
      ${''}                 | ${''}
      ${undefined}          | ${''}
      ${null}               | ${''}
    `(
      'should pass "$expected" to classModifier when mode is $mode',
      ({ mode, expected }) => {
        radioInputProps.mode = mode;
        const result = Act();
        expect(result.find(Field).props().classModifier).toEqual(expected);
      }
    );
  });
});
