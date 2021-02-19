import { shallow } from 'enzyme';
import React, { ComponentProps } from 'react';
import Radio from './Radio';
import RadioItem from './RadioItem';
import { Option } from '../../../../core/src/InputManager';

describe('Radio', () => {
  describe('template', () => {
    let args: ComponentProps<typeof Radio>;

    beforeEach(() => {
      const options = [
        { label: 'For fun', value: '1' },
        { label: 'For work', value: '2', id: 'customId' },
        { label: 'For drink', value: '3' },
        { label: 'For the life', value: '4', disabled: true },
      ] as Option[];
      args = { options };
    });

    const Act = () => shallow(<Radio {...args} />);

    it('should have correct html rendered', () => {
      const radioComponent = Act();
      expect(radioComponent.html).toMatchSnapshot();
    });

    describe('isSelected', () => {
      it.each`
        value        | expected
        ${'1'}       | ${true}
        ${'2'}       | ${false}
        ${null}      | ${false}
        ${undefined} | ${false}
      `(
        'should set checked to $expected when selectedValue is $value',
        ({ value, expected }) => {
          args.value = value;
          const radioComponent = Act();
          expect(
            radioComponent
              .find(RadioItem)
              .findWhere((node) => node.prop('value') === '1')
              .prop('checked')
          ).toBe(expected);
        }
      );
    });
  });
});
