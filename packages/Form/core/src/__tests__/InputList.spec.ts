import { getOptionClassName, isDisabled } from '../InputList';

describe('getOptionClassName', () => {
  it.each`
    className        | classModifier   | defaultClassName | disabled | expected
    ${'myClassName'} | ${'myModifier'} | ${'default'}     | ${false} | ${'myClassName myClassName--myModifier'}
    ${'myClassName'} | ${'myModifier'} | ${'default'}     | ${true}  | ${'myClassName myClassName--myModifier myClassName--disabled'}
    ${'myClassName'} | ${undefined}    | ${'default'}     | ${true}  | ${'myClassName myClassName--undefined myClassName--disabled'}
    ${'myClassName'} | ${null}         | ${'default'}     | ${true}  | ${'myClassName myClassName--null myClassName--disabled'}
    ${'myClassName'} | ${''}           | ${'default'}     | ${true}  | ${'myClassName myClassName--disabled'}
    ${'myClassName'} | ${''}           | ${'default'}     | ${false} | ${'myClassName'}
    ${''}            | ${''}           | ${'default'}     | ${true}  | ${'default default--disabled'}
    ${''}            | ${''}           | ${'default'}     | ${false} | ${'default'}
  `(
    'Should return expected: $expected when className: $className, classModifier: $classModifier, defaultClassName: $defaultClassName, disabled: $disabled',
    ({ className, classModifier, defaultClassName, disabled, expected }) => {
      const result = getOptionClassName(
        className,
        classModifier,
        defaultClassName,
        disabled
      );

      expect(result).toEqual(expected);
    }
  );
});

describe('isDisabled', () => {
  it('Should return true when option.isDisabled is undefined and disabled equal true', () => {
    const result = isDisabled({}, true);
    expect(result).toBeTruthy();
  });
  it('Should return true when option.isDisabled is undefined and disabled equal false', () => {
    const result = isDisabled({}, false);
    expect(result).toBeFalsy();
  });
  it('Should return true when option.isDisabled equal true and disabled equal true', () => {
    const result = isDisabled({ disabled: true }, true);
    expect(result).toBeTruthy();
  });
  it('Should return true when option.isDisabled equal false and disabled equal true', () => {
    const result = isDisabled({ disabled: false }, true);
    expect(result).toBeFalsy();
  });
});
