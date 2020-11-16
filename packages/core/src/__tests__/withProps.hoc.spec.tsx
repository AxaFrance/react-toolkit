import React, { ComponentType } from 'react';
import { render } from '@testing-library/react';
import withProps from '../withProps.hoc';

type MyComponentProps = {
  foo: string;
};
const MyComponent: ComponentType<MyComponentProps> = (props) => {
  const { foo } = props;
  return <span>{foo}</span>;
};

describe('HOC withProps', () => {
  it('Should have mapped props', () => {
    // Arrange
    type MapperType = {
      bar: string;
    };
    const propsMapper = (props: MyComponentProps) => {
      const { foo } = props;
      return {
        bar: `${foo}-${foo}`,
      };
    };
    const Enhanced = withProps<MyComponentProps, MapperType>(propsMapper)(
      MyComponent
    );

    // Act
    const { asFragment } = render(<Enhanced foo="bar" />);

    // Assert
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should override mapped props', () => {
    // Arrange
    type MapperType = {
      foo: string;
    };
    const propsMapper = (props: MyComponentProps) => {
      const { foo } = props;
      return {
        foo: `${foo}-${foo}`,
      };
    };
    const Enhanced = withProps<MyComponentProps, MapperType>(propsMapper)(
      MyComponent
    );

    // Act
    const { asFragment } = render(<Enhanced foo="bar" />);

    // Assert
    expect(asFragment()).toMatchSnapshot();
  });
});
