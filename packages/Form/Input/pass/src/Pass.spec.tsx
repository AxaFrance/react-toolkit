import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pass from './Pass';
import PassInput from './PassInput';

describe('Form/PassInput/Pass', () => {
  test('Pass display correctly', () => {
    const { asFragment } = render(
      <Pass onChange={() => {}} name="passwordtest" onToggleType={jest.fn()} />
    );
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByRole('password')).toBeInTheDocument();
  });
});

describe('<Pass />', () => {
  describe('Call onChange callback when type value', () => {
    it('Swith from password to text type', () => {
      const onChange = jest.fn();

      render(
        <Pass
          onChange={onChange}
          onToggleType={jest.fn()}
          id="testid"
          name="passwordtest"
        />
      );

      userEvent.type(screen.getByRole('password'), 'changed value');

      expect(onChange).toHaveBeenCalledWith({
        name: 'passwordtest',
        value: 'changed value',
        id: 'testid',
      });
    });
  });

  describe('ToggleType when eye icon is clicked', () => {
    it('Switch from password to text type', () => {
      const onToggleType = jest.fn();

      render(
        <Pass onToggleType={onToggleType} id="testid" name="passwordtest" />
      );

      userEvent.click(screen.getByRole('button'));
      expect(onToggleType).toHaveBeenCalled();
    });
  });
});

describe('<PassInput />', () => {
  describe('onChange', () => {
    it('Check score password when score = 0, strength is bad', () => {
      const { container } = render(
        <PassInput
          id="password-id"
          label="Password"
          name="passwordtest"
          onToggleType={jest.fn()}
          score={0}
        />
      );

      userEvent.type(screen.getByRole('password'), 'sam');
      const divContainer = container.querySelector('div.af-form__pass');
      expect(divContainer).toHaveClass('af-form__pass--bad');
    });
    it('Switch from text to password type', () => {
      const onToggleType = jest.fn();

      const { getByRole } = render(
        <PassInput
          id="password-id"
          label="Password"
          name="passwordtest"
          onToggleType={onToggleType}
          type="text"
        />
      );

      userEvent.click(screen.getByRole('button'));
      userEvent.click(screen.getByRole('button'));
      expect(onToggleType).toHaveBeenCalled();
      expect(getByRole('password')).toHaveAttribute('type', 'password');
    });
  });
});
