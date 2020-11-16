import InputManager, { Option } from '../InputManager';

describe('InputManager', () => {
  describe('createId', () => {
    it('should return an non-null id', () => {
      // Act
      const id = InputManager.createId();

      // Assert
      expect(id).not.toBeFalsy();
    });
  });

  describe('getInputId', () => {
    it('should return provided id', () => {
      // Arrange
      const id = '12345';

      // Act
      const inputId = InputManager.getInputId(id);

      // Assert
      expect(inputId).toEqual(id);
    });

    it('should return provided non-null id when no id', () => {
      // Arrange
      const id: string = null;

      // Act
      const inputId = InputManager.getInputId(id);

      // Assert
      expect(inputId).not.toBeFalsy();
    });
  });

  describe('getFirstId', () => {
    it('should return empty when no options (null)', () => {
      // Arrange
      const options: Option[] = null;

      // Act
      const firstId = InputManager.getFirstId(options);

      // Assert
      expect(firstId).toEqual('');
    });

    it('should return empty when no options (empty)', () => {
      // Arrange
      const options: Option[] = [];

      // Act
      const firstId = InputManager.getFirstId(options);

      // Assert
      expect(firstId).toEqual('');
    });

    it('should return first value when options provided', () => {
      // Arrange
      const options: Option[] = [
        {
          id: '12345',
        },
        {
          id: '67890',
        },
      ];

      // Act
      const firstId = InputManager.getFirstId(options);

      // Assert
      expect(firstId).toEqual('12345');
    });
  });

  describe('getOptionsWithId', () => {
    it('should return empty array when no options (null)', () => {
      // Arrange
      const options: Option[] = null;

      // Act
      const optionsWithId = InputManager.getOptionsWithId(options);

      // Assert
      expect(optionsWithId).toHaveLength(0);
    });

    it('should return options with id when not provided', () => {
      // Arrange
      const options: Option[] = [
        {
          foo: 'bar',
        },
        {
          foo: 'barbar',
          id: '67890',
        },
      ];

      // Act
      const optionsWithId = InputManager.getOptionsWithId(options);

      // Assert
      expect(optionsWithId).toHaveLength(2);

      expect(optionsWithId[0].id).not.toBeFalsy();
      expect(optionsWithId[0].foo).toEqual('bar');

      expect(optionsWithId[1].id).toEqual('67890');
      expect(optionsWithId[1].foo).toEqual('barbar');
    });
  });
});
