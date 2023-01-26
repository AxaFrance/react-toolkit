import React, { ComponentProps, ComponentType } from 'react';
import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import getClickId from '../getClickId';

interface MyComponentProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  title: string;
}
const MyComponent: ComponentType<MyComponentProps> = ({ title, ...props }) => (
  <a {...props}>{title}</a>
);

describe('getClickId', () => {
  it('onClick should return id', () => {
    const MyComponentWithClick = (
      props: ComponentProps<typeof MyComponent>
    ) => {
      const propsWithClickId = getClickId<ComponentProps<typeof MyComponent>>({
        option: {
          event: ['onClick'],
        },
        props,
      });

      return <MyComponent {...propsWithClickId} />;
    };

    const onClick = jest.fn();
    const id = 'id';
    render(<MyComponentWithClick title="link" id={id} onClick={onClick} />);

    // Act
    UserEvent.click(screen.getByText(/link/));

    // Assert
    expect(onClick).toBeCalledWith({ id });
  });
});
