import utils from './utils';

describe('utils testing', () => {
  test('castToArray should transform object to array', () => {
    const initValue = {
      init: true,
    };
    expect(utils.castToArray(initValue)).toEqual([initValue]);
  });
  test('castToArray should not transform array', () => {
    const initValue = [
      {
        init: true,
      },
    ];
    expect(utils.castToArray(initValue)).toEqual(initValue);
  });
});
