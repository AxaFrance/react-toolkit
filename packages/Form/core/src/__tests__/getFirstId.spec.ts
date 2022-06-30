import { getFirstId, Option } from '..';

describe('getFirstId', () => {
  it('should return empty when no options (null)', () => {
    const options: Option[] = null;
    const firstId = getFirstId(options);
    expect(firstId).toEqual('');
  });

  it('should return empty when no options (empty)', () => {
    const options: Option[] = [];
    const firstId = getFirstId(options);
    expect(firstId).toEqual('');
  });

  it('should return first value when options provided', () => {
    const options: Option[] = [
      {
        id: '12345',
        label: 'label 1',
        value: 'value 1',
      },
      {
        id: '67890',
        label: 'label 2',
        value: 'value 2',
      },
    ];

    const firstId = getFirstId(options);
    expect(firstId).toEqual('12345');
  });
});
