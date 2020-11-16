import React, { ComponentType } from 'react';
import { render } from '@testing-library/react';
import withClassModifier, {
  WithClassModifierOptions,
} from '../withClassModifier.hoc';

type MyComponentProps = {} & WithClassModifierOptions;
const MyComponent: ComponentType<MyComponentProps> = (props) => {
  const { className } = props;
  return <span className={className} />;
};

describe('HOC withClassDefault', () => {
  it('Should have className without modifier', () => {
    // Arrange
    const className = 'some-class-name';
    const Enhanced = withClassModifier<MyComponentProps>()(MyComponent);

    // Act
    const { asFragment } = render(<Enhanced className={className} />);

    // Assert
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should have className with modifier', () => {
    // Arrange
    const className = 'some-class-name';
    const classModifier = 'modifier';
    const Enhanced = withClassModifier<MyComponentProps>()(MyComponent);

    // Act
    const { asFragment } = render(
      <Enhanced className={className} classModifier={classModifier} />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
  });
});
