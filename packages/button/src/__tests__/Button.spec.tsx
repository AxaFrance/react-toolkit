import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../Button';

describe('<ButtonBase>', () => {
  it('should render', () => {
    const onClickMock = jest.fn();
    const { getByRole } = render(
      <Button type="submit" id="id" className="class" onClick={onClickMock}>
        <span className="af-btn__text">Récapitulatif</span>
        <i className="glyphicon glyphicon-arrowthin-right" />
      </Button>
    );
    userEvent.click(getByRole('button'));
    expect(onClickMock).toHaveBeenCalledWith({ id: 'id' });
  });
});
