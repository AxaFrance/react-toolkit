import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Popover from '../Popover';

describe('<Popover />', () => {
  describe('mode "click"', () => {
    it('Should contain PopoverClick element when mode "click"', () => {
      const { getByRole } = render(
        <Popover mode="click">
          <Popover.Pop>
            <p>Modal content</p>
          </Popover.Pop>
          <Popover.Over>
            <span>Source</span>
          </Popover.Over>
        </Popover>
      );

      // Assert
      expect(getByRole('presentation')).toBeInTheDocument();
    });

    it('Should display content when element clicked', () => {
      // Arrange
      const { getByRole } = render(
        <Popover mode="click">
          <Popover.Pop>
            <p>Modal content</p>
          </Popover.Pop>
          <Popover.Over>
            <span>Source</span>
          </Popover.Over>
        </Popover>
      );

      userEvent.click(getByRole('presentation'));

      expect(getByRole('presentation').nextElementSibling).toHaveClass(
        'af-popover__container-pop'
      );
    });
  });

  describe('mode "hover"', () => {
    it('Should contain PopoverOver element when mode "hover"', () => {
      // Arrange
      const { getByRole } = render(
        <Popover mode="hover">
          <Popover.Pop>
            <p>Modal content</p>
          </Popover.Pop>
          <Popover.Over>
            <span>Source</span>
          </Popover.Over>
        </Popover>
      );

      // Assert
      expect(getByRole('presentation').parentElement.parentElement).toHaveClass(
        'af-popover__wrapper'
      );
    });

    it('Should display content when element hovered', () => {
      // Arrange
      const { getByRole } = render(
        <Popover mode="hover">
          <Popover.Pop>
            <p>Modal content</p>
          </Popover.Pop>
          <Popover.Over>
            <span>Source</span>
          </Popover.Over>
        </Popover>
      );

      userEvent.hover(getByRole('presentation'));

      // Assert
      expect(getByRole('presentation').nextElementSibling).toHaveClass(
        'af-popover__container-pop'
      );
    });

    it('Should hide content when element not hovered', () => {
      // Arrange
      const { getByRole } = render(
        <Popover mode="hover">
          <Popover.Pop>
            <p>Modal content</p>
          </Popover.Pop>
          <Popover.Over>
            <span>Source</span>
          </Popover.Over>
        </Popover>
      );

      // Act
      userEvent.hover(getByRole('presentation'));
      userEvent.unhover(getByRole('presentation'));

      // Assert
      expect(getByRole('presentation').nextSibling).toBeNull();
    });
  });
});
