import React from 'react';
import { render } from '@testing-library/react';
import { MessageTypes } from '@axa-fr/react-toolkit-form-core';
import { RadioInput, RadioModes } from '..';

const options = [
  { label: 'Option 1', value: '1', id: 'option1_id' },
  { label: 'Option 2', value: '2', id: 'option2_id' },
];

describe('<RadioInput />', () => {
  it('should have correct html rendered', () => {
    const { asFragment } = render(
      <RadioInput
        id="123"
        label="test"
        message="test"
        messageType={MessageTypes.error}
        options={options}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  describe('Radio Child', () => {
    it.each`
      classModifier | expected
      ${''}         | ${'af-form__radio-custom'}
      ${'test'}     | ${'af-form__radio-custom af-form__radio-custom--test'}
      ${undefined}  | ${'af-form__radio-custom'}
      ${null}       | ${'af-form__radio-custom'}
    `(
      'should pass "$expected" to classModifier when classModifier is $classModifier',
      ({ classModifier, expected }) => {
        const { getByRole } = render(
          <RadioInput
            id="123"
            label="test"
            message="test"
            messageType={MessageTypes.error}
            options={options}
            forceDisplayMessage
            classModifier={classModifier}
            value="1"
          />
        );
        expect(getByRole('radio', { checked: true }).parentElement).toHaveClass(
          expected
        );
      }
    );

    it.each`
      messageType           | expectedClassName
      ${null}               | ${'af-form__radio-custom af-form__radio-custom--test'}
      ${undefined}          | ${'af-form__radio-custom af-form__radio-custom--test'}
      ${''}                 | ${'af-form__radio-custom af-form__radio-custom--test'}
      ${MessageTypes.error} | ${'af-form__radio-custom af-form__radio-custom--test af-form__radio-custom--error'}
    `(
      'should pass "test" to classModifier when messageType is $messageType',
      ({ messageType, expectedClassName }) => {
        const { asFragment, getByRole } = render(
          <RadioInput
            id="123"
            label="test"
            message="test message error"
            messageType={messageType}
            options={options}
            forceDisplayMessage
            classModifier="test"
            value="1"
            disabled
          />
        );
        expect(getByRole('radio', { checked: true }).parentElement).toHaveClass(
          expectedClassName
        );
        expect(asFragment()).toMatchSnapshot();
      }
    );

    it.each`
      forceDisplayMessage | expected
      ${true}             | ${'af-form__radio-custom af-form__radio-custom--error'}
      ${false}            | ${''}
      ${undefined}        | ${''}
      ${null}             | ${''}
    `(
      'should pass "$expected" to classModifier when forceDisplayMessage is $forceDisplayMessage',
      ({ forceDisplayMessage, expected }) => {
        const { getByRole } = render(
          <RadioInput
            id="123"
            label="test"
            message="test"
            messageType={MessageTypes.error}
            options={options}
            forceDisplayMessage={forceDisplayMessage}
            value="1"
          />
        );
        const div = getByRole('radio', { checked: true }).parentElement;
        expect(div).toHaveClass('af-form__radio-custom');
        if (expected) {
          expect(div).toHaveClass(expected);
        }
      }
    );
  });

  describe('Field Child', () => {
    it.each`
      classModifier | expected
      ${''}         | ${''}
      ${'test'}     | ${'test'}
      ${undefined}  | ${''}
      ${null}       | ${''}
    `(
      'should pass "$expected" to classModifier when classModifier is $classModifier',
      ({ classModifier, expected }) => {
        const { container } = render(
          <RadioInput
            id="123"
            label="test"
            mode="classic"
            message="test"
            messageType={MessageTypes.error}
            options={options}
            forceDisplayMessage
            classModifier={classModifier}
            value="1"
          />
        );
        expect(container.firstChild).toHaveClass('af-form__group--label-top');
        if (expected) {
          expect(container.firstChild).toHaveClass(
            `af-form__group--${expected}`
          );
        }
      }
    );

    it('should pass "test" to classModifier when mode is default', () => {
      const { container } = render(
        <RadioInput
          id="123"
          label="test"
          mode={RadioModes.default}
          message="test"
          messageType={MessageTypes.error}
          options={options}
          forceDisplayMessage
          classModifier="test"
          value="1"
        />
      );
      expect(container.firstChild).toHaveClass('af-form__group--test');
    });

    it.each`
      mode                  | expected
      ${RadioModes.classic} | ${'af-form__group--label-top'}
      ${RadioModes.default} | ${'af-form__group'}
      ${''}                 | ${'af-form__group'}
      ${undefined}          | ${'af-form__group'}
      ${null}               | ${'af-form__group'}
    `(
      'should pass "$expected" to classModifier when mode is $mode',
      ({ mode, expected }) => {
        const { container } = render(
          <RadioInput
            id="123"
            label="test"
            mode={mode}
            message="test"
            messageType={MessageTypes.error}
            options={options}
            forceDisplayMessage
            value="1"
          />
        );
        expect(container.firstChild).toHaveClass(expected);
      }
    );
  });
});
