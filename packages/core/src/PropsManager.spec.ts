import PropsManager from './PropsManager';

describe('PropsManager', () => {
  describe('omit', () => {
    it('should return props when no key (null) to omit', () => {
      // Arrange
      const props = {
        foo: 'bar',
        id: '12345',
      };
      const keys: string[] = null;

      // Act
      const newProps = PropsManager.omit(keys)(props);

      // Assert
      expect(newProps).toEqual({
        foo: 'bar',
        id: '12345',
      });
    });

    it('should remove keys from props', () => {
      // Arrange
      const props = {
        foo: 'bar',
        id: '12345',
      };
      const keys: string[] = ['foo'];

      // Act
      const newProps = PropsManager.omit(keys)(props);

      // Assert
      expect(newProps).toEqual({ id: '12345' });
    });

    it('should not modify source props when key not found', () => {
      // Arrange
      const props = {
        foo: 'bar',
        id: '12345',
      };
      const keys: string[] = ['xxx', null, undefined];

      // Act
      const newProps = PropsManager.omit(keys)(props);

      // Assert
      expect(newProps).toEqual({ foo: 'bar', id: '12345' });
    });

    it('should not modify source props', () => {
      // Arrange
      const props = {
        foo: 'bar',
        id: '12345',
      };
      const keys: string[] = ['foo', 'id'];

      // Act
      PropsManager.omit(keys)(props);

      // Assert
      expect(props).toEqual({ foo: 'bar', id: '12345' });
    });
  });
});
