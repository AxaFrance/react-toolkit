import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Title from '../Title';

const noop = () => {};
describe('<TabStateless>', () => {
  it('should render component', () => {
    render(
      <Title onChange={noop} active>
        Title displayed
      </Title>
    );
    expect(screen.getByText('Title displayed')).toBeInTheDocument();
  });

  it('should render id click onCancel', () => {
    const onChange = jest.fn();
    const { getByRole } = render(
      <Title active onChange={onChange}>
        header
      </Title>
    );
    expect(screen.getByText('header')).toBeInTheDocument();
    fireEvent.click(getByRole('button'));
    expect(onChange).toHaveBeenCalledWith({ id: '' });
  });
});
