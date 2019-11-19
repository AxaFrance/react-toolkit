import React from 'react';
import Accordion, { handleToggle } from './Accordion';
import '@testing-library/jest-dom/extend-expect';

describe('Accordion', () => {

  it('handleToggle should return correct value', () => {
    let state = { collapses: [false] };
    let props = { onlyOne: true, children: {} };
    let event = { collapse: true, index: 0 };
    let newState = handleToggle(state, props)(event);
    expect(newState.collapses).toEqual([true]);

    state = { collapses: [false, true, false] };
    props = { onlyOne: true, children: [{}, {}, {}] };
    event = { collapse: true, index: 0 };
    newState = handleToggle(state, props)(event);
    expect(newState.collapses).toEqual([true, false, false]);

    event = { collapse: false, index: 1 };
    newState = handleToggle(state, props)(event);
    expect(newState.collapses).toEqual([false, false, false]);

    event = { collapse: true, index: 0 };
    props = { onlyOne: false, children: [{}, {}, {}] };
    newState = handleToggle(state, props)(event);
    expect(newState.collapses).toEqual([true, true, false]);
  });
});
