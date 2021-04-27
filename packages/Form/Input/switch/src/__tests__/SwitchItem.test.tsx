import React from 'react';
import { render, screen } from '@testing-library/react';
import SwitchItem from '../SwitchItem';

describe('SwitchItem', () => {
  it('Verify input exist', () => {
    render(
      <SwitchItem
        label="Test Switch item"
        name="testSwitchItem"
        value="0"
        disabled={false}
        onChange={jest.fn()}
      />
    );
    const radioElement = screen.getByRole('radio', {
      name: 'Test Switch item',
    });
    expect(radioElement).toBeInTheDocument();
    expect(screen.getByLabelText(/Test Switch item/)).toBeInTheDocument();
  });
});
