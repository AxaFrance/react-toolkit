import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import HelpInfo from '../HelpInfo';

describe('HelpInfo', () => {
  describe('Mode hover (default)', () => {
    it('should show help when hovering i', async () => {
      // Arrange
      render(<HelpInfo content="Help content">My text</HelpInfo>);

      // Act
      UserEvent.hover(screen.getByText('My text'));

      // Assert
      await waitFor(() => {
        expect(screen.queryByText(/Help content/)).toBeInTheDocument();
      });
    });

    it('should hide help when unhovering i', async () => {
      // Arrange
      render(<HelpInfo content="Help content">My text</HelpInfo>);

      // Act
      UserEvent.unhover(screen.getByText('My text'));

      // Assert
      await waitFor(() => {
        expect(screen.queryByText(/Help content/)).not.toBeInTheDocument();
      });
    });

    it('should not show help before hover', async () => {
      // Arrange
      render(<HelpInfo content="Help content">My text</HelpInfo>);

      // Act
      // No user interaction

      // Assert
      expect(screen.queryByText(/Help content/)).not.toBeInTheDocument();
    });

    it('Should render children without popover content when isDisabled true', async () => {
      // Arrange
      render(
        <HelpInfo isDisabled content="Help content">
          My text
        </HelpInfo>
      );

      // Act
      UserEvent.hover(screen.getByText('My text'));

      // Assert
      expect(screen.queryByText(/Help content/)).not.toBeInTheDocument();
    });

    it('Should render children without popover content when not have content', async () => {
      // Arrange
      render(<HelpInfo>My text</HelpInfo>);

      // Act
      UserEvent.hover(screen.getByText('My text'));

      // Assert
      expect(screen.queryByText(/Help content/)).not.toBeInTheDocument();
    });
  });

  describe('Mode click', () => {
    it('should show help on when clicking on children', async () => {
      // Arrange
      render(
        <HelpInfo mode="click" content="Help content">
          My text
        </HelpInfo>
      );

      // Act
      UserEvent.click(screen.getByText('My text'));

      // Assert
      await waitFor(() => {
        expect(screen.getByText(/Help content/)).toBeInTheDocument();
      });
    });

    it('should not hide help when clicking on help content', async () => {
      // Arrange
      render(
        <HelpInfo mode="click" content="Help content">
          My text
        </HelpInfo>
      );
      UserEvent.click(screen.getByText('My text'));

      await screen.findByText(/Help content/);

      // Act
      UserEvent.click(screen.getByText(/Help content/));

      // Assert
      await waitFor(() => {
        expect(screen.getByText(/Help content/)).toBeInTheDocument();
      });
    });

    it('should hide help when clicking on i', async () => {
      // Arrange
      render(
        <HelpInfo mode="click" content="Help content">
          My text
        </HelpInfo>
      );

      UserEvent.click(screen.getByText('My text'));

      await waitFor(() => {
        screen.queryByText(/Help content/);
      });

      // Act
      UserEvent.click(screen.getByText('My text'));

      // Assert
      await waitFor(() => {
        expect(screen.queryByText(/Help content/)).not.toBeInTheDocument();
      });
    });

    it('should not show help on hover', async () => {
      // Arrange
      render(
        <HelpInfo mode="click" content="Help content">
          My text
        </HelpInfo>
      );

      // Act
      UserEvent.hover(screen.getByText('My text'));

      // Assert
      await waitFor(() => {
        expect(screen.queryByText(/Help content/)).not.toBeInTheDocument();
      });
    });

    it('should not show help before click', async () => {
      // Arrange
      render(
        <HelpInfo mode="click" content="Help content">
          My text
        </HelpInfo>
      );

      // Act
      // No user interaction

      // Assert
      expect(screen.queryByText(/Help content/)).not.toBeInTheDocument();
    });
  });
});
