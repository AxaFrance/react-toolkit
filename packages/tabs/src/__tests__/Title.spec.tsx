import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Title from '../Title';

const noop = () => {};
describe('<TabStateless>', () => {
  it('should render component', () => {
    const { asFragment } = render(
      <Title onChange={noop} active>
        Title displayed
      </Title>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render id click onCancel', () => {
    const onChange = jest.fn();
    const { getByRole } = render(
      <Title active onChange={onChange}>
        header
      </Title>
    );
    fireEvent.click(getByRole('button'));
    expect(onChange).toHaveBeenCalledWith({ id: '' });
  });
});
