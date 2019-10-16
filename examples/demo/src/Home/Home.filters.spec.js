export { computeNumberPages } from './Home.filters';

describe('Home.filters', () => {

  it('computeNumberPages should (be 1) when (called with empty array)', () => {
    const numberPages = computeNumberPages([], 1);
    expect(numberPages).toBe(1);
  });

  it('computeNumberPages should (be 1) when (called with null array)', () => {
    const numberPages = computeNumberPages(null, 1);
    expect(numberPages).toBe(1);
  });

  it('computeNumberPages should (be 10) when (called with array.length of 500 )', () => {
    const numberPages = computeNumberPages(new Array(500), 10);
    expect(numberPages).toBe(50);
  });

  it('computeNumberPages should (be 1) when (called with negative items)', () => {
    const numberPages = computeNumberPages(new Array(500), -1);
    expect(numberPages).toBe(500);
  });

});
