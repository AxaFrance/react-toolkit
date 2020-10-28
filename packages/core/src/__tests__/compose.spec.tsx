import React, { ComponentType } from 'react';
import { render } from '@testing-library/react';
import withClassDefault from '../withClassDefault.hoc';
import withClassModifier from '../withClassModifier.hoc';
import compose from '../compose';
import identity from '../identity.hoc';

type MyComponentProps = {
  foo: string;
  classModifier: string;
};
const MyComponent: ComponentType<MyComponentProps> = (props) => {
  const { foo } = props;
  return <span>{foo}</span>;
};

describe('compose should', () => {
  it('apply all HOC', () => {
    // Arrange
    const defaultClassName = 'some-class-name';
    const classModifier = 'modifier';
    const enhance = compose(
      withClassDefault<MyComponentProps>(defaultClassName),
      withClassModifier()
    );
    const Enhanced = enhance(MyComponent);

    // Act
    const { asFragment } = render(
      <Enhanced foo="bar" classModifier={classModifier} />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
  });

  it('loose type of props when more than HOC', () => {
    // Arrange
    const enhance = compose(
      identity<MyComponentProps>(),
      identity(),
      identity(),
      identity(),
      identity(),
      identity(),
      identity(),
      identity()
    );
    const Enhanced = enhance(MyComponent);

    // Act
    const { asFragment } = render(<Enhanced />);

    // Assert
    expect(asFragment()).toMatchSnapshot();
  });
});
