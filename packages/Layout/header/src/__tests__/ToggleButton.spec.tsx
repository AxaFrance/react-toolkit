import React from 'react';
import { render } from '@testing-library/react';
import ToggleButton from '../ToggleButton';

describe('ToggleButton', () => {
  it('Children has aria-controls property', () => {
    const idControl = 'test';
    const { getByRole } = render(
      <ToggleButton idControl={idControl}>
        <button type="button">bouton</button>
      </ToggleButton>
    );
    expect(getByRole('button')).toHaveAttribute('aria-controls', idControl);
    expect(getByRole('button')).toHaveAttribute('aria-haspopup', 'true');
  });
});
