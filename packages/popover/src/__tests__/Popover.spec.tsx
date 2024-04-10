import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
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

    it('Should display content when element clicked', async () => {
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

      await userEvent.click(getByRole('presentation'));

      expect(getByRole('presentation').nextElementSibling).toHaveClass(
        'af-popover__container-pop'
      );
    });

    it('Should hide content when element reclicked', async () => {
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

      await userEvent.click(getByRole('presentation'));

      expect(getByRole('presentation').nextElementSibling).toHaveClass(
        'af-popover__container-pop'
      );

      await userEvent.click(getByRole('presentation'));

      expect(getByRole('presentation').nextElementSibling).toBeNull();
    });

    it('Should contain PopoverClick element when the "Enter" key is pressed and the button is focused', async () => {
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

      const buttonElement = getByRole('button');
      act(() => {
        buttonElement.focus();
      });

      expect(buttonElement).toHaveFocus();

      await userEvent.keyboard('{Enter}');

      expect(getByRole('presentation').nextElementSibling).toHaveClass(
        'af-popover__container-pop'
      );
    });
  });

  it('Should hide PopoverClick element when the button loses focus', async () => {
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

    const buttonElement = getByRole('button');
    act(() => {
      buttonElement.focus();
    });

    expect(buttonElement).toHaveFocus();

    await userEvent.keyboard('{Enter}');
    expect(getByRole('presentation').nextElementSibling).toHaveClass(
      'af-popover__container-pop'
    );

    await userEvent.tab();
    expect(buttonElement).not.toHaveFocus();
    expect(getByRole('presentation').nextElementSibling).toBeNull();
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
      expect(
        getByRole('presentation').parentElement?.parentElement
      ).toHaveClass('af-popover__wrapper');
    });

    it('Should display content when element hovered', async () => {
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

      await userEvent.hover(getByRole('presentation'));

      // Assert
      expect(getByRole('presentation').nextElementSibling).toHaveClass(
        'af-popover__container-pop'
      );
    });

    it('Should display content when element is focused', async () => {
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

      const buttonElement = getByRole('button');
      act(() => {
        buttonElement.focus();
      });

      expect(buttonElement).toHaveFocus();
      await screen.findByText('Modal content');

      // Assert
      expect(getByRole('presentation').nextElementSibling).toHaveClass(
        'af-popover__container-pop'
      );
    });

    it('Should hide content when element not hovered', async () => {
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
      await userEvent.hover(getByRole('presentation'));
      await userEvent.unhover(getByRole('presentation'));

      // Assert
      expect(getByRole('presentation').nextSibling).toBeNull();
    });
  });

  it('Should hide content when element loses focus', async () => {
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

    const buttonElement = getByRole('button');
    act(() => {
      buttonElement.focus();
    });

    expect(buttonElement).toHaveFocus();
    await screen.findByText('Modal content');

    expect(getByRole('presentation').nextElementSibling).toHaveClass(
      'af-popover__container-pop'
    );

    await userEvent.tab();

    expect(buttonElement).not.toHaveFocus();
    expect(getByRole('presentation').nextElementSibling).toBeNull();
  });
});
