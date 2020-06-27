import { handleToggleState } from './Accordion';

describe('Accordion', () => {
  it('handleToggle should return correct value', () => {
    let oldCollapses = [false];
    let props = { onlyOne: true, children: {} };
    let event = { collapse: true, index: 0, id: 'id' };
    // @ts-ignore
    let collapses = handleToggleState(oldCollapses, props)(event);
    expect(collapses).toEqual([true]);

    oldCollapses = [false, true, false];
    props = { onlyOne: true, children: [{}, {}, {}] };
    event = { collapse: true, index: 0, id: 'id' };
    // @ts-ignore
    collapses = handleToggleState(oldCollapses, props)(event);
    expect(collapses).toEqual([true, false, false]);

    event = { collapse: false, index: 1, id: 'id2' };
    // @ts-ignore
    collapses = handleToggleState(oldCollapses, props)(event);
    expect(collapses).toEqual([false, false, false]);

    event = { collapse: true, index: 0, id: 'id' };
    props = { onlyOne: false, children: [{}, {}, {}] };
    // @ts-ignore
    collapses = handleToggleState(oldCollapses, props)(event);
    expect(collapses).toEqual([true, true, false]);
  });
});
