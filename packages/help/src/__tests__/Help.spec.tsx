import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import Help from '../Help';

describe('Help', () => {
  describe('Mode click (default)', () => {
    it('should show help on when clicking on i', async () => {
      // Arrange
      render(<Help>Help content</Help>);

      // Act
      UserEvent.click(screen.getByText('i'));

      // Assert
      await waitFor(() => {
        expect(screen.getByText(/Help content/)).toBeInTheDocument();
      });
    });

    it('should not hide help when clicking on help content', async () => {
      // Arrange
      render(<Help>Help content</Help>);
      UserEvent.click(screen.getByText('i'));
      await waitFor(() => {
        screen.queryByText(/Help content/);
      });

      // Act
      UserEvent.click(screen.getByText(/Help content/));

      // Assert
      await waitFor(() => {
        expect(screen.getByText(/Help content/)).toBeInTheDocument();
      });
    });

    it('should hide help when clicking on i', async () => {
      // Arrange
      render(<Help>Help content</Help>);
      UserEvent.click(screen.getByText('i'));
      await waitFor(() => {
        screen.queryByText(/Help content/);
      });

      // Act
      UserEvent.click(screen.getByText('i'));

      // Assert
      await waitFor(() => {
        expect(screen.queryByText(/Help content/)).not.toBeInTheDocument();
      });
    });

    it('should not show help on hover', async () => {
      // Arrange
      render(<Help>Help content</Help>);

      // Act
      UserEvent.hover(screen.getByText('i'));

      // Assert
      await waitFor(() => {
        expect(screen.queryByText(/Help content/)).not.toBeInTheDocument();
      });
    });

    it('should not show help before click', async () => {
      // Arrange
      render(<Help>Help content</Help>);

      // Act
      // No user interaction

      // Assert
      expect(screen.queryByText(/Help content/)).not.toBeInTheDocument();
    });
  });

  describe('Mode hover', () => {
    it('should show help when hovering i', async () => {
      // Arrange
      render(<Help mode="over">Help content</Help>);

      // Act
      UserEvent.hover(screen.getByText('i'));

      // Assert
      await waitFor(() => {
        expect(screen.queryByText(/Help content/)).toBeInTheDocument();
      });
    });

    it('should hide help when unhovering i', async () => {
      // Arrange
      render(<Help mode="over">Help content</Help>);

      // Act
      UserEvent.unhover(screen.getByText('i'));

      // Assert
      await waitFor(() => {
        expect(screen.queryByText(/Help content/)).not.toBeInTheDocument();
      });
    });

    it('should not show help before hover', async () => {
      // Arrange
      render(<Help mode="over">Help content</Help>);

      // Act
      // No user interaction

      // Assert
      expect(screen.queryByText(/Help content/)).not.toBeInTheDocument();
    });
  });
});
