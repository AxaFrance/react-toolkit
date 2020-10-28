import ClassManager from '../ClassManager';

describe('ClassManager', () => {
  it('Should return empty when no className and no defaultClassName', () => {
    // Arrange
    const className: string = null;
    const classModifier: string = null;
    const defaultClassName: string = null;

    // Act
    const componentClassName = ClassManager.getComponentClassName(
      className,
      classModifier,
      defaultClassName
    );

    // Assert
    expect(componentClassName).toEqual('');
  });

  it('Should return defaultClassName when no className', () => {
    // Arrange
    const className: string = null;
    const classModifier: string = null;
    const defaultClassName: string = 'default';

    // Act
    const componentClassName = ClassManager.getComponentClassName(
      className,
      classModifier,
      defaultClassName
    );

    // Assert
    expect(componentClassName).toEqual('default');
  });

  it('className should override defaultClassName', () => {
    // Arrange
    const className: string = 'foo';
    const classModifier: string = null;
    const defaultClassName: string = 'default';

    // Act
    const componentClassName = ClassManager.getComponentClassName(
      className,
      classModifier,
      defaultClassName
    );

    // Assert
    expect(componentClassName).toEqual('foo');
  });

  it('classModifier should do nothing when no className and no defaultClassName', () => {
    // Arrange
    const className: string = null;
    const classModifier: string = 'mod1';
    const defaultClassName: string = null;

    // Act
    const componentClassName = ClassManager.getComponentClassName(
      className,
      classModifier,
      defaultClassName
    );

    // Assert
    expect(componentClassName).toEqual('');
  });

  it('single classModifier should add modifier to className', () => {
    // Arrange
    const className: string = 'foo';
    const classModifier: string = 'mod1';
    const defaultClassName: string = 'default';

    // Act
    const componentClassName = ClassManager.getComponentClassName(
      className,
      classModifier,
      defaultClassName
    );

    // Assert
    expect(componentClassName).toEqual('foo foo--mod1');
  });

  it('multiple classModifier should add modifiers to className', () => {
    // Arrange
    const className: string = 'foo';
    const classModifier: string = 'mod1 mod2';
    const defaultClassName: string = 'default';

    // Act
    const componentClassName = ClassManager.getComponentClassName(
      className,
      classModifier,
      defaultClassName
    );

    // Assert
    expect(componentClassName).toEqual('foo foo--mod1 foo--mod2');
  });

  it('classModifier should add modifier on last className', () => {
    // Arrange
    const className: string = 'foo bar';
    const classModifier: string = 'mod1 mod2';
    const defaultClassName: string = 'default';

    // Act
    const componentClassName = ClassManager.getComponentClassName(
      className,
      classModifier,
      defaultClassName
    );

    // Assert
    expect(componentClassName).toEqual('foo bar bar--mod1 bar--mod2');
  });
});
