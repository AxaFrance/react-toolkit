import React, { ComponentType } from 'react';
import { render } from '@testing-library/react';
import withClassDefault from '../withClassDefault.hoc';

type MyComponentProps = {
  className?: string;
};
const MyComponent: ComponentType<MyComponentProps> = (props) => {
  const { className } = props;
  return <span className={className} />;
};

describe('HOC withClassDefault', () => {
  it('Should have defaultClassName when none provided', () => {
    // Arrange
    const defaultClassName = 'default-class-name';
    const enhance = withClassDefault(defaultClassName);
    const Enhanced = enhance(MyComponent);

    // Act
    const { asFragment } = render(<Enhanced />);

    // Assert
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should have className when provided', () => {
    // Arrange
    const className = 'my-class-name';
    const defaultClassName = 'default-class-name';
    const enhance = withClassDefault(defaultClassName);
    const Enhanced = enhance(MyComponent);

    // Act
    const { asFragment } = render(<Enhanced className={className} />);

    // Assert
    expect(asFragment()).toMatchSnapshot();
  });
});
