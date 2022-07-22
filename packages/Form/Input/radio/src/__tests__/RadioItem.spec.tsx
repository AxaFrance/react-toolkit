import React from 'react';
import { render } from '@testing-library/react';
import RadioItem from '../RadioItem';

describe('RadioItem', () => {
  it('should have correct html rendered', () => {
    const { asFragment } = render(<RadioItem id="id" label="test" />);
    expect(asFragment()).toMatchSnapshot();
  });

  describe('input', () => {
    it('should call getInputId and set the input id', () => {
      const { getByRole } = render(<RadioItem id="id" label="test" />);
      expect(getByRole('radio')).toHaveAttribute('id', 'id');
    });
  });

  describe('div wrapper', () => {
    it('should set className to $expected when ', () => {
      const className = 'className';
      const { container } = render(
        <RadioItem id="id" label="test" className={className} />
      );
      expect(container.firstChild).toHaveClass(className);
    });

    it('should call getComponentClassName with disabled modifier added to classModifier', () => {
      const className = 'className';
      const classModifier = 'classModifier';

      const { container } = render(
        <RadioItem
          id="id"
          label="test"
          className={className}
          classModifier={classModifier}
          disabled
        />
      );

      expect(container.firstChild).toHaveClass(className);
      expect(container.firstChild).toHaveClass(
        `${className}--${classModifier}`
      );
    });
  });
});
