import React from 'react';
import { render } from '@testing-library/react';
import ButtonCore from '../ButtonCore';

describe('<ButtonCore>', () => {
  it('should render component', () => {
    const { getByRole } = render(
      <ButtonCore onClick={jest.fn()}>Content</ButtonCore>
    );
    expect(getByRole('button')).toHaveClass('btn');
    expect(getByRole('button')).toHaveClass('af-btn');
  });
});
