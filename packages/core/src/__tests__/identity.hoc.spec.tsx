import React, { ComponentType } from 'react';
import { render } from '@testing-library/react';
import identity from '../identity.hoc';

type MyComponentProps = {
  foo: string;
};
const MyComponent: ComponentType<MyComponentProps> = (props) => {
  const { foo } = props;
  return (
    <ul>
      <li>foo: {foo}</li>
    </ul>
  );
};

describe('HOC identity', () => {
  it('should render component', () => {
    // Arrange
    const enhance = identity<MyComponentProps>();
    const Enhanced = enhance(MyComponent);

    // Act
    const { asFragment } = render(<Enhanced foo="bar" />);

    // Assert
    expect(asFragment()).toMatchSnapshot();
  });
});
