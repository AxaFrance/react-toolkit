import React from 'react';
import { fireEvent, render, waitFor, screen } from '@testing-library/react';
import Accordion, { handleToggleState, EnhancedProps } from './Accordion';
import CollapseCard from './CollapseCard';

const setup = (props: Omit<EnhancedProps, 'children'>) => {
  const onToggle = jest.fn();
  const utils = render(
    <Accordion {...props}>
      <CollapseCard id="one" isOpen>
        <CollapseCard.Header>Header 1</CollapseCard.Header>
        <CollapseCard.Body>Text 1</CollapseCard.Body>
      </CollapseCard>
      <CollapseCard id="two" isOpen={false}>
        <CollapseCard.Header>Header 2</CollapseCard.Header>
        <CollapseCard.Body>Text 2</CollapseCard.Body>
      </CollapseCard>
      <CollapseCard id="three" isOpen={false} onToggle={onToggle}>
        <CollapseCard.Header>Header 3</CollapseCard.Header>
        <CollapseCard.Body>Text 3</CollapseCard.Body>
      </CollapseCard>
    </Accordion>
  );
  return { ...utils };
};

describe('Accordion', () => {
  it('renders Accordion correctly', () => {
    const { asFragment } = setup({});
    expect(asFragment()).toMatchSnapshot();
  });

  it('should open only one collapse (onlyOne)', async () => {
    const { container } = setup({ onlyOne: true });

    fireEvent.click(screen.getByText('Header 3'));

    await waitFor(() => {
      expect(
        container.querySelectorAll('.af-accordion__collapse--open').length
      ).toBe(1);
      expect(
        container
          .querySelector('.af-accordion__item--open')
          .querySelector('.af-accordion__block').innerHTML
      ).toEqual('Text 3');
    });
  });

  it('handleToggle should return correct value', () => {
    let oldCollapses = [false];
    let props = { onlyOne: true, children: {} };
    let event = { isOpen: true, index: 0, id: 'id' };
    // @ts-ignore
    let collapses = handleToggleState(oldCollapses, props)(event);
    expect(collapses).toEqual([true]);

    oldCollapses = [false, true, false];
    props = { onlyOne: true, children: [{}, {}, {}] };
    event = { isOpen: true, index: 0, id: 'id' };
    // @ts-ignore
    collapses = handleToggleState(oldCollapses, props)(event);
    expect(collapses).toEqual([true, false, false]);

    event = { isOpen: false, index: 1, id: 'id2' };
    // @ts-ignore
    collapses = handleToggleState(oldCollapses, props)(event);
    expect(collapses).toEqual([false, false, false]);

    event = { isOpen: true, index: 0, id: 'id' };
    props = { onlyOne: false, children: [{}, {}, {}] };
    // @ts-ignore
    collapses = handleToggleState(oldCollapses, props)(event);
    expect(collapses).toEqual([true, true, false]);
  });
});
