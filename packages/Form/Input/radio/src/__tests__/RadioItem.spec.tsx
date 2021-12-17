import React from 'react';
import { render } from '@testing-library/react';
import { ClassManager, InputManager } from '@axa-fr/react-toolkit-core';
import RadioItem from '../RadioItem';

describe('RadioItem', () => {
  it('should have correct html rendered', () => {
    const { asFragment } = render(<RadioItem id="id" label="test" />);
    expect(asFragment()).toMatchSnapshot();
  });

  describe('input', () => {
    it('should call getInputId and set the input id', () => {
      jest.spyOn(InputManager, 'getInputId');
      const { getByRole } = render(<RadioItem id="id" label="test" />);
      expect(InputManager.getInputId).toHaveBeenCalledWith('id');
      expect(getByRole('radio')).toHaveAttribute('id', 'id');
    });
  });

  describe('div wrapper', () => {
    it('should set className to $expected when ', () => {
      const className = 'className';
      jest.spyOn(ClassManager, 'getComponentClassName');
      const { container } = render(
        <RadioItem id="id" label="test" className={className} />
      );
      expect(ClassManager.getComponentClassName).toHaveBeenCalledWith(
        className,
        '',
        'af-form__radio'
      );
      expect(container.firstChild).toHaveClass(`${className}`);
    });

    it('should call getComponentClassName with disabled modifier added to classModifier', () => {
      const className = 'className';
      const classModifier = 'classModifier';
      jest.spyOn(ClassManager, 'getComponentClassName');

      render(
        <RadioItem
          id="id"
          label="test"
          className={className}
          classModifier={classModifier}
          disabled
        />
      );

      expect(ClassManager.getComponentClassName).toHaveBeenCalledWith(
        className,
        `${classModifier} disabled`,
        'af-form__radio'
      );
    });
  });
});
