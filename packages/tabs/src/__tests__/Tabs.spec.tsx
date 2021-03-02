import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import Tabs from '../Tabs';

describe('Tabs', () => {
  it('should display tab content when user clicks on tab link', () => {
    const { getByRole } = render(
      <Tabs>
        <Tabs.Tab title="Title 1">Content 1</Tabs.Tab>
        <Tabs.Tab title="Title 2">Content 2</Tabs.Tab>
      </Tabs>
    );

    expect(screen.getByText('Content 1')).toBeInTheDocument();

    const secondTabLink = getByRole('button', { name: 'Title 2' });
    fireEvent.click(secondTabLink);

    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });

  it('should display the second tab specified by activeIndex prop', () => {
    const { getByRole } = render(
      <Tabs activeIndex="1">
        <Tabs.Tab title="Title 1">Content 1</Tabs.Tab>
        <Tabs.Tab title="Title 2">Content 2</Tabs.Tab>
      </Tabs>
    );

    expect(screen.getByText('Content 2')).toBeInTheDocument();

    const secondTabLink = getByRole('button', { name: 'Title 1' });
    fireEvent.click(secondTabLink);

    expect(screen.getByText('Content 1')).toBeInTheDocument();
  });
});
