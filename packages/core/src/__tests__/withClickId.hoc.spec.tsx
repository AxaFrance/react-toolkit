import React, { ComponentType } from 'react';
import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import withClickId from '../withClickId.hoc';

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

describe('withClickId', () => {
  it('onClick should return id', () => {
    // Arrange
    const Enhanced = withClickId<MyComponentProps>({
      event: ['onClick'],
    })(MyComponent);
    const onClick = jest.fn();
    const id = 'id';
    render(<Enhanced title="link" id={id} onClick={onClick} />);

    // Act
    UserEvent.click(screen.getByText(/link/));

    // Assert
    expect(onClick).toBeCalledWith({ id });
  });
});
