import parseValueToNumber from './NumberHelper';

describe('Form/NumberInput/Number', () => {
  test('parse a text number', () => {
    let badNumber = parseValueToNumber('2a0');
    expect(badNumber).toBe(null);
    badNumber = parseValueToNumber('*420.2');
    expect(badNumber).toBe(null);
    badNumber = parseValueToNumber('3.');
    expect(badNumber).toBe(null);
    badNumber = parseValueToNumber('4,');
    expect(badNumber).toBe(null);

    let goodNumber = parseValueToNumber('20');
    expect(goodNumber).toBe(20);
    goodNumber = parseValueToNumber('2.1');
    expect(goodNumber).toBe(2.1);
    goodNumber = parseValueToNumber('2,20');
    expect(goodNumber).toBe(2.2);
  });
});
