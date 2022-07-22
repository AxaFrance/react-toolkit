import FormClassManager from '../FormClassManager';

describe('getInputClassModifier', () => {
  it('Should return classModifier without hasinfobulle when children is false', () => {
    const result = FormClassManager.getInputClassModifier('myModifier', false);
    expect(result).toEqual('myModifier');
  });
  it('Should return classModifier with hasinfobulle when children is false', () => {
    const result = FormClassManager.getInputClassModifier('myModifier', true);
    expect(result).toEqual('myModifier hasinfobulle');
  });
});

describe('getModifier', () => {
  it.each`
    messageType  | expected
    ${undefined} | ${'error'}
    ${'success'} | ${'success'}
    ${'warning'} | ${'warning'}
    ${'error'}   | ${'error'}
    ${'other'}   | ${'error'}
  `(
    'Should return expected: $expected when messageType: $messageType',
    ({ messageType, expected }) => {
      const result = FormClassManager.getModifier(messageType);
      expect(result).toEqual(expected);
    }
  );
});

describe('getMessageClassModifier', () => {
  it.each`
    messageType  | message      | modifier      | expected
    ${undefined} | ${undefined} | ${'modifier'} | ${''}
    ${'success'} | ${undefined} | ${'modifier'} | ${''}
    ${'warning'} | ${undefined} | ${'modifier'} | ${''}
    ${'error'}   | ${undefined} | ${'modifier'} | ${''}
    ${'other'}   | ${undefined} | ${'modifier'} | ${''}
    ${undefined} | ${'message'} | ${'modifier'} | ${'modifier error'}
    ${'success'} | ${'message'} | ${'modifier'} | ${'modifier success'}
    ${'warning'} | ${'message'} | ${'modifier'} | ${'modifier warning'}
    ${'error'}   | ${'message'} | ${'modifier'} | ${'modifier error'}
    ${'other'}   | ${'message'} | ${'modifier'} | ${'modifier error'}
    ${'other'}   | ${'message'} | ${undefined}  | ${'error'}
    ${'other'}   | ${'message'} | ${''}         | ${'error'}
  `(
    'Should return expected: $expected when messageType: $messageType, message: $message, modifier: $modifier',
    ({ messageType, expected, message, modifier }) => {
      expect(
        FormClassManager.getMessageClassModifier(messageType, message, modifier)
      ).toEqual(expected);
    }
  );
});
